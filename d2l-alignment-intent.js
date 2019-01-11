/**
`d2l-select-outcomes`


@demo demo/index.html
*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@polymer/polymer/polymer-legacy.js';

import 'd2l-polymer-siren-behaviors/store/entity-behavior.js';
import 'd2l-hypermedia-constants/d2l-hm-constants-behavior.js';
import './d2l-outcome.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="d2l-alignment-intent">
	<template strip-whitespace="">
		<style>
			:host {
				display: block;
			}
		</style>
		<d2l-outcome href="[[_getOutcome(entity)]]" token="[[token]]"></d2l-outcome>
	</template>

	
</dom-module>`;

document.head.appendChild($_documentContainer.content);
Polymer({

	is: 'd2l-alignment-intent',

	behaviors: [
		D2L.PolymerBehaviors.Siren.EntityBehavior,
		window.D2L.Hypermedia.HMConstantsBehavior
	],

	_getOutcome: function(entity) {
		return entity && entity.hasLinkByRel(this.HypermediaRels.Outcomes.outcome) && entity.getLinkByRel(this.HypermediaRels.Outcomes.outcome).href;
	}

});
