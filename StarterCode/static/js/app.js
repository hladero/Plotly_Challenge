function buildplot(selection){
    d3.json("samples.json").then((samples) => { 
    //var samples = samples.sample_values.slide(0,10);
    var otu_ids = samples[1];
    
    console.log(samples.otu_ids);
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
        var sample= samples.filter(obj=>obj.id == selection)[0];

        Object.entries(meta).forEach(([key,val])=> {
        d3.select('#sample-metadata').append('h5').text(key.toUpperCase()+': '+val)    
        }) 

            var xvalues = sample.otu_ids;
            var yvalues = sample.sample_values;
            var markersize = sample.sample_values;
            var markercolors= sample.otu_ids;
        
            var traceA= [{
                x: xvalues,
                y: yvalues,
                mode: 'markers',
                marker:{
                    size: markersize,
                    color: markercolors
                }
            }]
            var data = [traceA];
            var layout={
                title: "otu_ids"
            };
            Plotly.newPlot("bubble",data,layout);


        console.log(sample);
    })
};


// d3.json("samples.json").then(({sample})=>{

// });
// function Handlesubmit() {
//     d3.event.preventdefault();
//     var id= d3.select('#selDataset').node().value
//     console.log(id);
//     buildplot(selection);

// }