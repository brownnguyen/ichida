var heightC1 = 422, 
    widthC1 = 422,
    heightC2 = 300,
    widthC2 = 300,
    heightC3 = 110,
    widthC3 = 110;
let pieBig = d3.select('#pie').attr('viewBox', '0 0 ' + widthC1 + ' ' + heightC1).attr('width', widthC1).attr('height', heightC1).append('g').attr('id', 'pieBig').attr('transform', 'translate(' + widthC1/2 + ',' + heightC1/2 + ')');
let dataPieC1 = [
    {value: 32, color: '#90b63d', text: '環境構築関連事業'},
    {value: 68, color: '#3088b7', text: 'ICT関連事業'}
], 
    dataPieC2 = [
        {value: 32, text: 'オフィス', color: '#91b83e'},
        {value: 36, text: '公共', color: '#650f96'},
        {value: 31, text: '情報', color: '#3088b7'}
    ],
    dataPieC3 = [
        {value: 100, text: '売上高'}
    ];
let rC1 = heightC1/2,
    rC2 = heightC2/2,
    rC3 = heightC3/2,
    pi = Math.PI,
    pieC1 = d3.pie().value(function(d){return d.value}).startAngle(-3/10*pi).sort(null),
    pieC2 = d3.pie().value(function(d){return d.value}).startAngle(-4/9*pi).sort(null),
    pieC3 = d3.pie().value(function(d){return d.value}),
    arcC1 = d3.arc().innerRadius(rC2).outerRadius(rC1),
    arcC2 = d3.arc().innerRadius(rC3).outerRadius(rC2),
    arcC3 = d3.arc().innerRadius(0).outerRadius(rC3);
let C1arc = pieBig.selectAll('.arcC1')
            .data(pieC1(dataPieC1))
            .enter()
            .append('g')
            .lower()
            .attr('class', function(d,i) {return 'arcC1' + i;})
C1arc.append('path')
    .attr('d', arcC1)
    .attr('id', function(d,i){
        return 'path' + i;
    })
    .style('fill', function(d,i){
        return dataPieC1[i].color
    });
C1arc.append('text')
    .attr('text-anchor',"middle")
    .attr('transform', function(d,i) {
        if(i === 0) {
            return 'translate(0,40) scale(0.94, 1)';
        }
        return 'translate(0,-40) scale(0.94, 1)'
    })
    .append('textPath')
    .attr('href', function(d,i) {
        return '#path' + i;
    }).text(function(d,i) {
        return dataPieC1[i].text;
    }).attr('font-family','Yu Gothic, sans-serif')
    .attr('font-size', '18px')
    .attr('fill', 'white')
    .attr('letter-spacing', '3px')
    .attr('font-weight', 600)
    .attr('startOffset', function(d,i) {
        if( i === 0) {
            return '24.5%';
        }
        return '26.4%'
    })
let pieMedium = d3.select('#pie').append('g').attr('id', 'pieMedium').attr('transform', 'translate(' + widthC1/2 + ',' + heightC1/2 + ')');
let C2arc = pieMedium.selectAll('.arcC2')
            .data(pieC2(dataPieC2))
            .enter()
            .append('g')
            .lower()
            .attr('class', function(d,i){return 'arcC2' + i;})
C2arc.append('path')
    .style('fill', 'ffffff')
    .style('stroke', '#d5d5d5')
    .style('stroke-width', 1)
    .attr('d', arcC2)
let textC2 = C2arc.append('g').attr('class', 'text-g')
    .attr('transform', function(d,i) {
        if(i === 0) {
            return 'translate(-70, -120)';
        }
        if( i === 1) {
            return 'translate(70, 0)';
        }
        if( i === 2) {
            return 'translate(-100, 40)';
        }
    });
textC2.append('rect')
    .attr('height', 26)
    .attr('width', function(d,i){
        if(i === 0) {
            return 74;
        }
        return 52;
    })
    .attr('rx', 13)
    .attr('fill', function(d,i) {
        console.log(dataPieC2[i].color);
        return dataPieC2[i].color;
    });
textC2.append('text')
    .attr('font-family','Yu Gothic, sans-serif')
    .attr('font-size', '14px')
    .attr('fill', 'white')
    .attr('font-weight', 600)
    // .attr('text-anchor', 'middle')
    .text(function(d,i){
        return dataPieC2[i].text
    }).attr('transform', function(d,i) {
        if(i === 0 ){
            return 'translate(7, 18)';
        }
        return 'translate(10, 18)';
    });
textC2.append('text')
    .attr('font-family','Roboto Condensed, sans-serif')
    .attr('font-size', '28px')
    .attr('font-weight', 700)
    .attr('text-anchor', 'middle')
    .attr('fill', function(d,i) {
        return dataPieC2[i].color
    }).text(function(d,i) {
        return dataPieC2[i].value + '%';
    }).attr('transform', function(d,i) {
        if(i === 0) {
            return  'translate(40, 55)';
        }
        return 'translate(30, 55)';
    });
let pieSmall = d3.select('#pie').append('g').attr('id', 'pieSmall').attr('transform', 'translate(' + widthC1/2 + ',' + heightC1/2 + ')');
let C3arc = pieSmall.selectAll('.arcC3')
            .data(pieC3(dataPieC3))
            .enter()
            .append('g')
            .attr('class', 'arcC3');
C3arc.append('path')
    .style('fill', '#333333')
    .attr('d', arcC3);
C3arc.append('image')
    .attr('href', '../images/business/img_logo.jpg')
    .attr('width', 54)
    .attr('height', 24)
    .attr('transform', 'translate(-27, -24)');
C3arc.append('text')
    .attr('font-family','Yu Gothic, sans-serif')
    .attr('font-size', '16px')
    .attr('fill', 'white')
    .attr('font-weight', 600)
    .attr('text-anchor', 'middle')
    .text(function(d,i) {
        return dataPieC3[i].text;
    }).attr('transform', 'translate(0, 20)');
