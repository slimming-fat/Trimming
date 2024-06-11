$(document).ready(function() {
    const classesData = {
        "usedClasses": 175,
        "bloatedClasses": 3736
    };
    const methodsData = {
        "usedMethods": 87930,
        "bloatedMethods": 18604
    };
    const projectData = {
        "usedProject": 39221,
        "bloatedProject": 4785
    };
    const barData = {
        "total": [106534, 3911, 44006],
        "used": [87930, 175, 39221]
    };
    var projectOption = {
        title: {
            text: 'Used and bloated JAR size',
            left: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: <strong>{c}</strong> (<strong>{d}%</strong>)'
        },
        legend: {
            orient: 'vertical',
            left: 'left'
        },
        series: [{
            name: 'Access From',
            type: 'pie',
            radius: '50%',
            data: [{
                value: projectData.usedProject,
                name: 'Used JAR size (KB)',
                itemStyle: {
                    color: '#008000'
                }
            }, {
                value: projectData.bloatedProject,
                name: 'Bloated JAR size (KB)',
                itemStyle: {
                    color: '#FFD700'
                }
            }],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }]
    };
    var classesOption = {
        title: {
            text: 'Used and bloated classes',
            left: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: <strong>{c}</strong> (<strong>{d}%</strong>)'
        },
        legend: {
            orient: 'vertical',
            left: 'left'
        },
        series: [{
            name: 'Access From',
            type: 'pie',
            radius: '50%',
            data: [{
                value: classesData.usedClasses,
                name: 'Used classes',
                itemStyle: {
                    color: '#008000'
                }
            }, {
                value: classesData.bloatedClasses,
                name: 'Bloated classes',
                itemStyle: {
                    color: '#FFD700'
                }
            }],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }]
    };
    var methodsOption = {
        title: {
            text: 'Used and bloated methods',
            left: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: <strong>{c}</strong> (<strong>{d}%</strong>)'
        },
        legend: {
            orient: 'vertical',
            left: 'left'
        },
        series: [{
            name: 'Access From',
            type: 'pie',
            radius: '50%',
            data: [{
                value: methodsData.usedMethods,
                name: 'Used methods',
                itemStyle: {
                    color: '#008000'
                }
            }, {
                value: methodsData.bloatedMethods,
                name: 'Bloated methods',
                itemStyle: {
                    color: '#FFD700'
                }
            }],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }]
    };
    var barOption = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {},
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01]
        },
        yAxis: {
            type: 'category',
            data: ['# Methods', '# Classes', 'Project JAR size (KB)']
        },
        series: [{
            name: 'Total',
            type: 'bar',
            data: barData.total
        }, {
            name: 'Used',
            type: 'bar',
            data: barData.used
        }]
    };

    var project = echarts.init($('#project')[0]);
    project.setOption(projectOption);
    var classes = echarts.init($('#classes')[0]);
    classes.setOption(classesOption);
    var methods = echarts.init($('#methods')[0]);
    methods.setOption(methodsOption);
    var barChart = echarts.init($('#container')[0]);
    barChart.setOption(barOption);

    $(window).resize(function() {
        project.resize();
        classes.resize();
        methods.resize();
        barChart.resize();
    });
});
