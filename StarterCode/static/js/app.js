d3.json('samples.json').then(({names})=>{
    names.forEach(name => {
        d3.select('#selDataset').append('option').text(name) 
    });
    show();
});

function optionChanged() {
    console.log('hi');
};

function show() {
    d3.json("samples.json").then(({metadata,samples})=>{
        var selection = d3.select("#selDataset").node().value;
        var meta= metadata.filter(obj=>obj.id == selection)[0];
        Object.entries(meta).forEach(([key,val])=> {
        d3.select('#sample-metadata').append('h5').text(key.toUpperCase()+': '+val)    
        }) 
        console.log(meta);
    })
}
function chart (){
    d3.json("samples.json").then(({samples})=>{
        var selection = d3.select("#selDataset").node().value;
        var chart = d3.select('#bar').node();
        var x=[];
        var y=[];

        switch(dataset){
            case "dataset 1":
                x = [1, 2, 3, 4, 5];
                y = [1, 2, 4, 8, 16];
                break;
            case "dataset 2":
                x = [1, 2, 3, 4, 5];
                y = [1, 2, 4, 8, 16];
                break;
            case "dataset 3":
                x = [1, 2, 3, 4, 5];
                y = [1, 2, 4, 8, 16];
                break;
            case "dataset 4":
                x = [1, 2, 3, 4, 5];
                y = [1, 2, 4, 8, 16];
                break;
            
            case "dataset 5":
                x = [1, 2, 3, 4, 5];
                y = [1, 2, 4, 8, 16];
                break;
            case "dataset 6":
                x = [1, 2, 3, 4, 5];
                y = [1, 2, 4, 8, 16];
                break;
                
                
                    
        
        
        
        
        
        
        
            }

        var sampl = samples.filter (obj=> obj.otu_ids == data [0,10];
            Object.entries())
    })
    data=[{
        x: 
        y:
    }]

}
