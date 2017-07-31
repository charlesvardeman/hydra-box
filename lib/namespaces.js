const rdf = require('rdf-ext')

const namespaces = {
  hydra: {
    mapping: rdf.namedNode('http://www.w3.org/ns/hydra/core#mapping'),
    search: rdf.namedNode('http://www.w3.org/ns/hydra/core#search'),
    supportedOperation: rdf.namedNode('http://www.w3.org/ns/hydra/core#supportedOperation'),
    template: rdf.namedNode('http://www.w3.org/ns/hydra/core#template')
  },
  hydraView: {
    HydraView: rdf.namedNode('http://example.org/hv/HydraView'),
    code: rdf.namedNode('http://example.org/hv/code'),
    source: rdf.namedNode('http://example.org/hv/source'),
    variables: rdf.namedNode('http://example.org/hv/variables')
  },
  rdf: {
    type: rdf.namedNode('http://www.w3.org/1999/02/22-rdf-syntax-ns#type')
  }
}

module.exports = namespaces
