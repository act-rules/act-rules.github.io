/**
 * Get list of test tool implementations
 * @param {Function} callback callback
 * @param {Array<String>} reports List of urls to test tool reports (json)
 */
var getTestToolImplementations = (function() {
  var callbacks = []
  var implementations = null

  /**
   * Given a report, get transformed (json ld framed) response
   * @param {} url resource endpoint for the report
   */
  function getJsonLdFramedDataForReport(url) {
    var jsonLdFrame = {
      '@context': {
        earl: 'http://www.w3.org/ns/earl#',
        WCAG: 'https://www.w3.org/TR/WCAG/#',
        http: 'http://www.w3.org/2011/http#',
        cnt: 'http://www.w3.org/2011/content#',
        dc: 'http://purl.org/dc/terms#',
        ptr: 'https://www.w3.org/2009/pointers#',
        doap: 'http://usefulinc.com/ns/doap#',
        foaf: 'http://xmlns.com/foaf/spec/#',
        vendor: {
          '@id': 'doap:vendor'
        },
        vendorTool: {
          '@id': 'doap:name'
        },
        assertedBy: {
          '@id': 'earl:assertedBy',
          '@type': '@id'
        },
        result: {
          '@id': 'earl:result',
          '@type': '@id'
        },
        test: {
          '@id': 'earl:test'
        },
        outcome: {
          '@id': 'earl:outcome',
          '@type': '@vocab'
        },
        passed: {
          '@id': 'earl:passed'
        },
        failed: {
          '@id': 'earl:failed'
        },
        inapplicable: {
          '@id': 'earl:inapplicable'
        },
        cantTell: {
          '@id': 'earl:cantTell'
        },
        undefined: {
          '@id': 'earl:undefined'
        },
        subject: {
          '@id': 'earl:subject'
        },
        mode: {
          '@id': 'earl:mode',
          '@type': '@vocab'
        },
        automatic: {
          '@id': 'earl:automatic'
        },
        info: {
          '@id': 'earl:info'
        },
        pointer: {
          '@id': 'earl:pointer'
        },

        body: {
          '@id': 'http:body'
        },
        statusCodeValue: {
          '@id': 'http:statusCodeValue'
        },
        methodName: {
          '@id': 'http:methodName'
        },
        requestURI: {
          '@id': 'http:requestURI'
        },

        chars: {
          '@id': 'cnt:chars'
        },
        characterEncoding: {
          '@id': 'cnt:characterEncoding'
        },

        source: {
          '@id': 'dc:source'
        },

        assertions: {
          '@reverse': 'earl:subject'
        },

        expression: {
          '@id': 'ptr:expression'
        },
        reference: {
          '@id': 'ptr:reference'
        }
      },
      '@type': 'earl:Assertion'
    }
    return new Promise(function(resolve, reject) {
      axios
        .get(url)
        .then(function(response) {
          var reportResult = response.data

          // frame the response
          jsonld.frame(reportResult, jsonLdFrame, function(
            err,
            result
          ) {
            if (err) {
              reject(
                'Unable to transform (jsonld frame) report data',
                err
              )
            }
            // resolve
            result.reportUrl = response.request.responseURL
            resolve(result)
          })
        })
        .catch(function(error) {
          reject(error)
        })
    })
  }

  return function(options) {
    var callback = options.callback || function() {}
    var reports = options.reports || null

    if (implementations) {
      callback(implementations)
      return
    }

    callbacks.push(callback)

    if (callbacks.length > 1) {
      // already triggered a fetch call - wait for results
      return
    }

    var promises = reports.reduce(function(out, reportUrl) {
      var p = getJsonLdFramedDataForReport(reportUrl)
      out.push(p)
      return out
    }, [])

    Promise.all(promises)
      .then(function(data) {
        implementations = data
        if (callbacks && callbacks.length) {
          callbacks.forEach(function(cb, index, arr) {
            cb(implementations)
            if (index === arr.length - 1) {
              callbacks = []
            }
          })
        }
      })
      .catch(function(err) {
        throw new Error('Error getting report data', err)
      })
  }
})()

/**
 * Run / Init
 */
function run() {
  // initialize highlightjs
  if (window.hljs) {
    hljs.initHighlightingOnLoad()
  }

  // fetch implementation reports
  var reports = [
    'https://raw.githubusercontent.com/w3c/earl/master/earl-reports/alfa-report.json', // alfa report
    'https://raw.githubusercontent.com/w3c/earl/master/earl-reports/axe-report.json' // axe report
  ]
  getTestToolImplementations({ reports }) // this populates the implementations data
}

//run
run()
