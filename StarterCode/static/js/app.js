d3.json("samples.json").then((samples) => {

    //var otu_ids = samples.samples[1];
    var trace1= {
        x: samples.samples[1],
        y:[1,2,3,4,5,6,7,8,9,10],
        type:"bar",
        orientation: "h"
    };
    var data=[trace1];
    var layout={
        title: "top 10 otu-ids"
    };

    Plotly.newPlot("bar",data,layout);
});


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
};



