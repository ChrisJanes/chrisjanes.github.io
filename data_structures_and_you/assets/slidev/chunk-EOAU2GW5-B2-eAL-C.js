import{y as l,g as p,f as a,i as f,A as P,v as E,j as D}from"./chunk-TGZYFRKZ-Dcn7nufO.js";import{_ as o,ak as m,al as C,am as j}from"./md-5iOcqcd_.js";var w="\0",u="\0",N="",g,v=(g=class{constructor(e={}){this._isDirected=Object.prototype.hasOwnProperty.call(e,"directed")?e.directed:!0,this._isMultigraph=Object.prototype.hasOwnProperty.call(e,"multigraph")?e.multigraph:!1,this._isCompound=Object.prototype.hasOwnProperty.call(e,"compound")?e.compound:!1,this._label=void 0,this._defaultNodeLabelFn=m(void 0),this._defaultEdgeLabelFn=m(void 0),this._nodes={},this._isCompound&&(this._parent={},this._children={},this._children[u]={}),this._in={},this._preds={},this._out={},this._sucs={},this._edgeObjs={},this._edgeLabels={}}isDirected(){return this._isDirected}isMultigraph(){return this._isMultigraph}isCompound(){return this._isCompound}setGraph(e){return this._label=e,this}graph(){return this._label}setDefaultNodeLabel(e){return C(e)||(e=m(e)),this._defaultNodeLabelFn=e,this}nodeCount(){return this._nodeCount}nodes(){return l(this._nodes)}sources(){var e=this;return p(this.nodes(),function(t){return j(e._in[t])})}sinks(){var e=this;return p(this.nodes(),function(t){return j(e._out[t])})}setNodes(e,t){var s=arguments,i=this;return a(e,function(r){s.length>1?i.setNode(r,t):i.setNode(r)}),this}setNode(e,t){return Object.prototype.hasOwnProperty.call(this._nodes,e)?(arguments.length>1&&(this._nodes[e]=t),this):(this._nodes[e]=arguments.length>1?t:this._defaultNodeLabelFn(e),this._isCompound&&(this._parent[e]=u,this._children[e]={},this._children[u][e]=!0),this._in[e]={},this._preds[e]={},this._out[e]={},this._sucs[e]={},++this._nodeCount,this)}node(e){return this._nodes[e]}hasNode(e){return Object.prototype.hasOwnProperty.call(this._nodes,e)}removeNode(e){if(Object.prototype.hasOwnProperty.call(this._nodes,e)){var t=o(s=>this.removeEdge(this._edgeObjs[s]),"removeEdge");delete this._nodes[e],this._isCompound&&(this._removeFromParentsChildList(e),delete this._parent[e],a(this.children(e),s=>{this.setParent(s)}),delete this._children[e]),a(l(this._in[e]),t),delete this._in[e],delete this._preds[e],a(l(this._out[e]),t),delete this._out[e],delete this._sucs[e],--this._nodeCount}return this}setParent(e,t){if(!this._isCompound)throw new Error("Cannot set parent in a non-compound graph");if(f(t))t=u;else{t+="";for(var s=t;!f(s);s=this.parent(s))if(s===e)throw new Error("Setting "+t+" as parent of "+e+" would create a cycle");this.setNode(t)}return this.setNode(e),this._removeFromParentsChildList(e),this._parent[e]=t,this._children[t][e]=!0,this}_removeFromParentsChildList(e){delete this._children[this._parent[e]][e]}parent(e){if(this._isCompound){var t=this._parent[e];if(t!==u)return t}}children(e){if(f(e)&&(e=u),this._isCompound){var t=this._children[e];if(t)return l(t)}else{if(e===u)return this.nodes();if(this.hasNode(e))return[]}}predecessors(e){var t=this._preds[e];if(t)return l(t)}successors(e){var t=this._sucs[e];if(t)return l(t)}neighbors(e){var t=this.predecessors(e);if(t)return P(t,this.successors(e))}isLeaf(e){var t;return this.isDirected()?t=this.successors(e):t=this.neighbors(e),t.length===0}filterNodes(e){var t=new this.constructor({directed:this._isDirected,multigraph:this._isMultigraph,compound:this._isCompound});t.setGraph(this.graph());var s=this;a(this._nodes,function(n,h){e(h)&&t.setNode(h,n)}),a(this._edgeObjs,function(n){t.hasNode(n.v)&&t.hasNode(n.w)&&t.setEdge(n,s.edge(n))});var i={};function r(n){var h=s.parent(n);return h===void 0||t.hasNode(h)?(i[n]=h,h):h in i?i[h]:r(h)}return o(r,"findParent"),this._isCompound&&a(t.nodes(),function(n){t.setParent(n,r(n))}),t}setDefaultEdgeLabel(e){return C(e)||(e=m(e)),this._defaultEdgeLabelFn=e,this}edgeCount(){return this._edgeCount}edges(){return E(this._edgeObjs)}setPath(e,t){var s=this,i=arguments;return D(e,function(r,n){return i.length>1?s.setEdge(r,n,t):s.setEdge(r,n),n}),this}setEdge(){var e,t,s,i,r=!1,n=arguments[0];typeof n=="object"&&n!==null&&"v"in n?(e=n.v,t=n.w,s=n.name,arguments.length===2&&(i=arguments[1],r=!0)):(e=n,t=arguments[1],s=arguments[3],arguments.length>2&&(i=arguments[2],r=!0)),e=""+e,t=""+t,f(s)||(s=""+s);var h=c(this._isDirected,e,t,s);if(Object.prototype.hasOwnProperty.call(this._edgeLabels,h))return r&&(this._edgeLabels[h]=i),this;if(!f(s)&&!this._isMultigraph)throw new Error("Cannot set a named edge when isMultigraph = false");this.setNode(e),this.setNode(t),this._edgeLabels[h]=r?i:this._defaultEdgeLabelFn(e,t,s);var _=L(this._isDirected,e,t,s);return e=_.v,t=_.w,Object.freeze(_),this._edgeObjs[h]=_,O(this._preds[t],e),O(this._sucs[e],t),this._in[t][h]=_,this._out[e][h]=_,this._edgeCount++,this}edge(e,t,s){var i=arguments.length===1?b(this._isDirected,arguments[0]):c(this._isDirected,e,t,s);return this._edgeLabels[i]}hasEdge(e,t,s){var i=arguments.length===1?b(this._isDirected,arguments[0]):c(this._isDirected,e,t,s);return Object.prototype.hasOwnProperty.call(this._edgeLabels,i)}removeEdge(e,t,s){var i=arguments.length===1?b(this._isDirected,arguments[0]):c(this._isDirected,e,t,s),r=this._edgeObjs[i];return r&&(e=r.v,t=r.w,delete this._edgeLabels[i],delete this._edgeObjs[i],y(this._preds[t],e),y(this._sucs[e],t),delete this._in[t][i],delete this._out[e][i],this._edgeCount--),this}inEdges(e,t){var s=this._in[e];if(s){var i=E(s);return t?p(i,function(r){return r.v===t}):i}}outEdges(e,t){var s=this._out[e];if(s){var i=E(s);return t?p(i,function(r){return r.w===t}):i}}nodeEdges(e,t){var s=this.inEdges(e,t);if(s)return s.concat(this.outEdges(e,t))}},o(g,"Graph"),g);v.prototype._nodeCount=0;v.prototype._edgeCount=0;function O(d,e){d[e]?d[e]++:d[e]=1}o(O,"incrementOrInitEntry");function y(d,e){--d[e]||delete d[e]}o(y,"decrementOrRemoveEntry");function c(d,e,t,s){var i=""+e,r=""+t;if(!d&&i>r){var n=i;i=r,r=n}return i+N+r+N+(f(s)?w:s)}o(c,"edgeArgsToId");function L(d,e,t,s){var i=""+e,r=""+t;if(!d&&i>r){var n=i;i=r,r=n}var h={v:i,w:r};return s&&(h.name=s),h}o(L,"edgeArgsToObj");function b(d,e){return c(d,e.v,e.w,e.name)}o(b,"edgeObjToId");export{v as G};
