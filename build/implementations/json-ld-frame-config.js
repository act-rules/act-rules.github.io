module.exports = {
	'@context': {
		earl: 'http://www.w3.org/ns/earl#',
		WCAG: 'https://www.w3.org/TR/WCAG/#',
		http: 'http://www.w3.org/2011/http#',
		cnt: 'http://www.w3.org/2011/content#',
		dct: 'http://purl.org/dc/terms/',
		ptr: 'https://www.w3.org/2009/pointers#',
		doap: 'http://usefulinc.com/ns/doap#',
		foaf: 'http://xmlns.com/foaf/spec/#',
		vendor: {
			'@id': 'doap:vendor',
		},
		vendorTool: {
			'@id': 'doap:name',
		},
		assertedBy: {
			'@id': 'earl:assertedBy',
			'@type': '@id',
		},
		result: {
			'@id': 'earl:result',
			'@type': '@id',
		},
		test: {
			'@id': 'earl:test',
		},
		outcome: {
			'@id': 'earl:outcome',
			'@type': '@vocab',
		},
		passed: {
			'@id': 'earl:passed',
		},
		failed: {
			'@id': 'earl:failed',
		},
		inapplicable: {
			'@id': 'earl:inapplicable',
		},
		cantTell: {
			'@id': 'earl:cantTell',
		},
		undefined: {
			'@id': 'earl:undefined',
		},
		subject: {
			'@id': 'earl:subject',
		},
		mode: {
			'@id': 'earl:mode',
			'@type': '@vocab',
		},
		automatic: {
			'@id': 'earl:automatic',
		},
		info: {
			'@id': 'earl:info',
		},
		pointer: {
			'@id': 'earl:pointer',
		},

		body: {
			'@id': 'http:body',
		},
		statusCodeValue: {
			'@id': 'http:statusCodeValue',
		},
		methodName: {
			'@id': 'http:methodName',
		},
		requestURI: {
			'@id': 'http:requestURI',
		},

		chars: {
			'@id': 'cnt:chars',
		},
		characterEncoding: {
			'@id': 'cnt:characterEncoding',
		},

		source: {
			'@id': 'dct:source',
		},

		title: {
			'@id': 'dct:title',
		},

		assertions: {
			'@reverse': 'earl:subject',
		},

		expression: {
			'@id': 'ptr:expression',
		},
		reference: {
			'@id': 'ptr:reference',
		},
	},
	'@type': 'earl:Assertion',
}
