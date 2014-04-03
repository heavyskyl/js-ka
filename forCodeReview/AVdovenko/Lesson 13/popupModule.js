var popupModule = (function(){
    var titleMod = "Filozoa",
        bodyMod = "The ancestral opisthokont cell is assumed to have possessed slender filose (thread-like) projections or 'tentacles'. In some opisthokonts (Mesomycetozoa and Corallochytrium) these were lost. They are retained in Filozoa, where they are simple and non-tapering, with a rigid core of actin bundles (contrasting with the flexible, tapering and branched filopodia of nucleariids and the branched rhizoids and hyphae of fungi). In choanoflagellates and in the most primitive animals, namely sponges, they aggregate into a filter-feeding collar around the cilium or flagellum; this is thought to be an inheritance from their most recent common filozoan ancestor.";
    
    return{   
        showMessage: function() {
            var container = document.createElement('div');
          
            container.innerHTML = '<link type="text/css" rel="stylesheet" href="modalCss.css">\
            <div id="container"><div id="blackBG"></div> \
            <div id="modal"> \
              <h1>' + titleMod + '</h1> \
              <div class="content">' + bodyMod + '</div> \
              <input id="close" type="button" value="Close"> \
            </div></div>';
            
            document.body.appendChild(container);        
        }
    }
})();