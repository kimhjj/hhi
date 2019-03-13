var MapUtils = function(map) {

	if (!(this instanceof MapUtils)) {
		throw new Error("New 를 통해 생성 하십시오.");
	}

	var map = map;
	var view = map.getView();

	this.getCurProj = function() {
		return view.getProjection();
	};

	this.getLayerById = function(layerId) {
		var layer = null;
		if(layerId){
			var layers = map.getLayers().getArray();
			for(var i in layers){	 // 브라우저 호환성 - ie6~, chrome
				if(layers[i].get('id') === layerId){
					layer = layers[i];
					break;
				}
			}
		}
		return layer;
	};

};