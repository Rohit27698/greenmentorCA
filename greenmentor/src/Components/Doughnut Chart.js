import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
class DoughnutChart extends Component {
	render() {
		const options = {
			animationEnabled: true,
			subtitles: [{
				verticalAlign: "center",
				fontSize: 24,
				dockInsidePlotArea: true
			}],
			data: [{
				type: "doughnut",
				showInLegend: true,
				indexLabel: "{name}: {y}",
				yValueFormatString: "#,###' CO2e'",
				dataPoints: [
						{ name: "Supplier-1", y: "800" },
					{ name: "Supplier-2", y: "420" },
					{ name: "Supplier-3", y: "420" },
					{ name: "Supplier-4", y: "889" },
					{ name: "Supplier-5", y: "1624" },
					{ name: "Supplier-6", y: "889" }
				
				]
			}]
		}
		
		return (
		<div>
			<h4 style={{textAlign:'left'}}>Emission by Supplier</h4>
			<CanvasJSChart options = {options} 
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}

export default DoughnutChart;