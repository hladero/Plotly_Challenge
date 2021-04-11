d3.json("samples.json").then((samples) => {
    //var otu_ids = samples.samples[1];
    var trace1= {
        x: samples.samples.otu_ids,
        y: samples.samples.samples_values,
        type:"bar",
        orientation: "h"
    };
    var data=[trace1];
    var layout={
        title: "top 10 otu-ids"
    };

    Plotly.newPlot("bar",data,layout);
});

function BubChart() {
    d3.json("samples.json").then(({bublechart})=>{

        var xvalues = bublechart.otu_ids;
        var yvalues = bublechart.sample_values;
        var markersize = bublechart.sample_values;
        var markercolors= bublechart.otu_ids;

        var traceA= {
            x: xvalues,
            y: yvalues,
            mode: 'markers',
            marker:{
                size: markersize,
                color: markercolors
            }
        };

        var data = [traceA];
        var layout={
            title: "otu_ids"
        };

        Plotly.newPlot("bubble",data,layout)
})};


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