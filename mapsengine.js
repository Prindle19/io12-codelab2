function loadJSONP() {
    
 // Get MapRoot JSON from Maps Engine Directory

// URL of the external script (Step 1)


// Create Insertable Script (Step 2)


// load the script (Step 3)
   
    
}    


function parseMapRoot(data) {
    $("#side_bar").append('<div id="map_title"><h3>' + data.name +'</h3></div>');
    $("#side_bar").append('<ul id="layer_picker" style="list-style-type: none;"></ul>');
    var index = 0
    setMapBounds(data.bounds);
    //Loop Through All The Layers of the Map, and Create MapDataLayers For Each One
    $.each(data.layers, function(index) {
        $("#layer_picker").append('<li><input type="checkbox" id="' + index + '" class="layer"/><label for="' + index + '">' + data.layers[index].layerName.replace("Frederick County Virginia", "").replace("County Mosaic", "") + '</label></li>');
        
        // Create the MapDataLayer, and Add it To An Array (Step 4)
        
        
    });  
  
  //add a JQuery Listener to the new "layer" class, so when a checkbox is checked, it will toggle a layer on or off
  $('.layer').change(function(){
  var layerID = parseInt($(this).attr('id'));
      if ($(this).attr('checked')){
          gebLayers[layerID].setMap(map);
      }else{
          gebLayers[layerID].setMap(null);
      }      
});  
    
}