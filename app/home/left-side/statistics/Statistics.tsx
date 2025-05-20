'use client';
import Card from '@/components/card/Card';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
const ReactApexChart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});

export default function Statistics() {
  const [chartOptions, setChartOptions] = useState<any>(null);
  const [chartSeries, setChartSeries] = useState<any[]>([]);

  useEffect(() => {
    setChartOptions({
      chart: {
        type: 'bar',
        height: 350,
      },
      title: {
        text: 'Country',
        align: 'center',
      },
      xaxis: {
        categories: [
          'Osaka',
          'Tokyo',
          'Sapporo',
          'ChiangMai',
          'Paris',
          'Rome',
          'Firenze',
          'Fukuoka',
        ],
      },
      plotOptions: {
        bar: {
          horizontal: true,
          columnWidth: '50%',
          endingShape: 'rounded',
        },
      },
      dataLabels: {
        enabled: false,
      },
      colors: ['#4e73df'],
    });

    setChartSeries([
      {
        name: '방문횟수',
        data: [4, 3, 3, 1, 1, 1, 1, 2],
      },
    ]);
  }, []);

  return (
    <Card appendclassname="statistics-area">
      <ReactApexChart
        options={chartOptions}
        series={chartSeries}
        type="bar"
        height={300}
      />
    </Card>
  );
}
