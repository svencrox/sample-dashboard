import { Component, HostListener, OnInit } from "@angular/core";
import { Chart } from "chart.js/auto";

@Component({
	selector: "app-dashboard",
	templateUrl: "./dashboard.component.html",
	styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
	amountChart: any;
	ngOnInit(): void {
		this.initLineChart();
	}

	@HostListener("window:resize", ["$event"])
	onWindowResize(event: Event): void {
		for (let id in Chart.instances) {
			Chart.instances[id].resize();
		}
	}

	initLineChart() {
		const amountChartId = document.getElementById("amount-payable") as HTMLCanvasElement;
		this.amountChart = new Chart(amountChartId, {
			type: "line",
			data: {
				labels: ["January", "February", "March", "April", "May"],
				datasets: [
					{
						label: "Amount Payable",
						data: [150, 230, 450, 300, 550],
						tension: 0.1,
					},
				],
			},
			options: {
				responsive: true,
				maintainAspectRatio: true,
			},
		});
	}
}
