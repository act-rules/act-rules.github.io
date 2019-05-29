# Generates the changelog (into `JSON`) for each rule, under `_rules/*.md` directory.

# iterate every rule file
for filepath in _rules/*.md
do
  # get rule filename
  filename=$(basename "${filepath%.*}")

  # parse rule `id` from `filename`
  id=${filename##*-}

  # create `changelogs` directory under `_data/`
  mkdir -p _data/changelogs

  # get git log of rule
  # - inclusive of filenme changes
  # - create log (JSON) per file in `_data/changelogs/{id}.json`
  git log \
    --pretty=format:'{%n "commit": "%H",%n  "abbreviated_commit": "%h",%n  "tree": "%T",%n  "abbreviated_tree": "%t",%n  "parent": "%P",%n  "abbreviated_parent": "%p",%n  "refs": "%D",%n  "encoding": "%e",%n  "sanitized_subject_line": "%f",%n  "commit_notes": "%N",%n  "verification_flag": "%G?",%n  "signer": "%GS",%n  "signer_key": "%GK",%n  "author": {%n    "name": "%aN",%n    "email": "%aE",%n    "date": "%aD"%n  },%n  "commiter": {%n    "name": "%cN",%n    "email": "%cE",%n    "date": "%cD"%n  }%n},' \
    --follow \
    -- "$filepath" \
    $@ | \
    perl -pe 'BEGIN{print "["}; END{print "]\n"}' | \
    perl -pe 's/},]/}]/' \
    >> _data/changelogs/"$id".json
done
