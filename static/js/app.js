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

        //.........Build a Chart
        
        var trace1= {
            x: sample.otu_ids.slice(0,10).reverse(),
            x: sample.sample_values.slice(0,10).reverse(),
            type:"bar",
            orientation: "h"
        };
        var data=[trace1];
        var layout={
            title: "top 10 OTU"
        };
    
        Plotly.newPlot("bar",data,layout);

        //.......Build  a Bubble Chart

            var xval = sample.otu_ids;
            var yval = sample.sample_values;
            var labels = sample.otu_labels;
        
            var dataA= [{
                x: xval,
                y: yval,
                text: labels,
                mode: 'markers',
                marker:{
                    size: yval,
                    color: xval,
                    colorscale: "Earth"
                }
            }]
            var Bubble = {
                
            };
            var layout={
                title: "OTU"
            };
            Plotly.newPlot("bubble",dataA,layout);

    })
};