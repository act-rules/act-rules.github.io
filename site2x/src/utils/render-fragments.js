
import React from "react"
import scUrls from './../../../_data/sc-urls'
import contributors from './../../../_data/contributors'

export function getSuccessCriterion(success_criterion) {
  if (!success_criterion) {
    return null;
  }
  return (
    <div className='meta'>
      <span className='heading'>SUCCESS CRITERION</span>
      {
        success_criterion.map((sc) => {
          const scData = scUrls[sc]
          return (
            <a className='sc-item'
              key={sc}
              href={scData.url}>
              {scData.num} {scData.scId}
            </a>
          )
        })
      }
    </div>
  )
}

export function getAuthors(authors) {
  if (!authors) {
    return null;
  }
  return (
    <aside style={{ width: `200px` }}>
      <div className='meta'>
        <span className='heading'>Authors</span>
        {
          authors.map((author) => {
            const authorData = contributors.find((c => {
              return c.name.toLowerCase() === author.toLowerCase()
            }))
            if (!authorData) {
              console.warn(`Author ${author}, not in contributor list.`)
              return null;
            }
            return (
              <a className='sc-item'
                href={authorData.site}
                key={authorData.name}>
                @{authorData.name}
              </a>
            )
          })
        }
      </div>
    </aside>
  )
}

export function getTestAspects(test_aspects) {
  if (!test_aspects) {
    return null
  }
  return (
    <>
      <span className='heading'>Test Aspects</span>
      <p>{test_aspects}</p>
    </>
  )
}


export function getAtomicRules(aRules) {
  if (!aRules) {
    return null;
  }
  return (
    <aside style={{ width: `275px` }}>
      <div className='meta'>
        <span className='heading'>Atomic Rules</span>
        {
          aRules.map((rule) => {
            return (
              <a className='sc-item'
                key={rule}>
                {rule}
              </a>
            )
          })
        }
      </div>
    </aside>
  )
}

