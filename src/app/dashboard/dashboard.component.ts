import { Component, HostListener, OnInit } from "@angular/core";
import { Chart } from "chart.js/auto";

@Component({
	selector: "app-dashboard",
	templateUrl: "./dashboard.component.html",
	styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
	amountChart: any;
	amountPie: any;
	ngOnInit(): void {
		this.initLineChart();
		this.initPieCharrt();
	}

	@HostListener("window:resize", ["$event"])
	onWindowResize(event: Event): void {
		for (let id in Chart.instances) {
			Chart.instances[id].resize();
		}
	}

	initLineChart() {
		const amountChartId = document.getElementById("amount-line") as HTMLCanvasElement;
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
			},
		});
	}

	initPieCharrt() {
		const amountPieId = document.getElementById("amount-pie") as HTMLCanvasElement;
		this.amountPie = new Chart(amountPieId, {
			type: "doughnut",
			data: {
				labels: ["Red", "Blue", "Yellow"],
				datasets: [
					{
						label: "My First Dataset",
						data: [300, 50, 100],
						backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)", "rgb(255, 205, 86)"],
						hoverOffset: 4,
					},
				],
			},
			options: {
				responsive: true,
			},
		});
	}
}
