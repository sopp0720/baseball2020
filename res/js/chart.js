var chart = bb.generate({
    bindto: "#chart",
    legend: {
        show: false
    },
    data: {
        color: function(color, d) {
            return "#72a0ef";
        },
        type: "area",
        columns: [
            ["data1", 3, 1, 2, 3, 10, 4, 9, 6]
        ],
        labels: {
            format: function(v, id, i, j) {
                if (v == 1) {
                    v = "10위";
                } else if (v == 2) {
                    v = "9위";
                } else if (v == 3) {
                    v = "8위";
                } else if (v == 4) {
                    v = "7위";
                } else if (v == 5) {
                    v = "6위";
                } else if (v == 6) {
                    v = "5위";
                } else if (v == 7) {
                    v = "4위";
                } else if (v == 8) {
                    v = "3위";
                } else if (v == 9) {
                    v = "2위";
                } else if (v == 10) {
                    v = "1위";
                }
                return v;
            },
            colors: "#4673c4",
            position: {
                x: 0,
                y: -10
            }
        }
    },
    tooltip: {
        show: false
    },
    axis: {
        y: {
            show: false
        },
        x: {
            tick: {
                centered: true,
                culling: false
            },
            type: "category",
            categories: [
                "3월",
                "4월",
                "5월",
                "6월",
                "7월",
                "8월",
                "9월",
                "10월"
            ]
        }
    },
    area: {
        linearGradient: {
            y: [
                0,
                1
            ],
            stops: [
                [
                    0,
                    "#77a1ed",
                    0.5
                ],
                [
                    1,
                    "#ffffff",
                    1
                ]
            ]
        }
    },
    point: {
        focus: {
            expand: {
                enabled: false
            }
        },
        pattern: [
            "<g><circle cx='4' cy='4' r='4' stroke='#72a0ef' stroke-width='2' fill='#ffffff'></circle></g>"
        ]
    },
    grid: {
        y: {
            lines: [{
                    value: 0,
                    class: "grid801"
                },
                {
                    value: 2,
                    class: "grid800"
                },
                {
                    value: 4,
                    class: "grid800"
                },
                {
                    value: 6,
                    class: "grid800"
                },
                {
                    value: 8,
                    class: "grid800"
                },
                {
                    value: 10,
                    class: "grid800"
                }
            ]
        }
    }
});
d3.select('.bb-grid-lines').lower();