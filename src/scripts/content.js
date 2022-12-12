let allJSON = []
const preTags = [...document.getElementsByTagName('pre')]
if (preTags.length > 0) {

	preTags.forEach(tag => {
		// Check if tag contains JSON
		try {
			// Parse JSON and push to allJSON
			allJSON.push(JSON.parse(tag.innerText))
		} catch (e) {
			// Not valid JSON
			return
		}
	})

	// If allJSON length is 1, define json as allJSON[0]
	const json = allJSON.length === 1 ? allJSON[0] : allJSON
	
	// If json is an array and has length > 0 or if json is an object
	if ((Array.isArray(json) && json.length > 0) || (typeof json === 'object' && json !== null)) {
		// Log JSON to console
		console.log(`_________________
This page's JSON:
‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
`, json, `


`)

	}
	
}