import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, BarChart, Bar, Cell } from 'recharts';
import { viewImg } from './ImgView';

type InputDataType = {
  data: Array<object>,
  h: number,
  xLabel: string,
  yLabel: string,
  allowLabels?: boolean
}

function viewImgHandler(input: InputDataType, type: string){
  let renderedEl;
  switch(type){
    case "line":
      renderedEl =  drawLine(input, true);
      break;
    case "bar":
      renderedEl =  drawBar(input, true);
      break;
    case "his":
      renderedEl =  drawHis(input, true);
      break;
    default:
      alert("Please report this problem: DEFAULT CASE REACHED (drawCharts.js)");
      break;
  }
  viewImg(renderedEl, "charts");
}

export function drawLine(input: InputDataType, forImg = false){
  let xAxis =
    //@ts-ignore
    input.data[0]["xVal"] ?
    <XAxis
      dataKey="xVal"
      label={{ value: input.xLabel, position: "insideBottom", dy: 20 }}
      padding={{left: 10, right: 10}}
    /> :
    <XAxis label={{ value: input.xLabel, position: "insideBottom", dy: 20 }}/>
  ;

  return <li className='chartContainer' onClick={forImg ? undefined : ()=>{viewImgHandler(input, "line")}}>
    <ResponsiveContainer width="100%" height={(input.h === undefined) ? 250 : input.h}>
      <LineChart data={input.data}  margin={{left: (input.yLabel !== "") ? 0 : -20, right: 15, top: 20, bottom: 20}}>
        {xAxis}
        <YAxis label={{ value: input.yLabel, dx: -18 , angle: -90}}/>
        <Line
          dataKey="yVal"
          stroke="blue"
          dot={{ fill: 'blue', strokeWidth: 1 }}
          //@ts-ignore
          label={input.allowLabels ? { fill: '#aaa', fontSize: 14, position: "top" } : false}
        />
      </LineChart>
    </ResponsiveContainer>
  </li>;
}

export function drawBar(input: InputDataType, forImg = false){
  let data = input.data;
  let h = (input.h === undefined)? 250 : input.h;
  let marginLeft = (input.yLabel !== "") ? 0 : -20;
  let onClickFunc = forImg ? undefined : ()=>{viewImgHandler(input, "bar")};

  return <li className='chartContainer' onClick={onClickFunc}>
    <ResponsiveContainer width="100%" height={h}>
      <BarChart data={data} margin={{left: marginLeft, right: 15, top:20, bottom: 20}}>
        <XAxis dataKey="name" label={{ value: input.xLabel, position: "insideBottom", dy: 20 }}/>
        <YAxis label={{ value: input.yLabel, dx: -18 , angle: -90}}/>
        <Bar dataKey="val" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  </li>;
}

export function drawHis(input: InputDataType, forImg = false){
  let data = input.data;
  let h = (input.h === undefined) ? 250 : input.h;
  let marginLeft = (input.yLabel !== "") ? 0 : -20;
  let onClickFunc = forImg ? undefined : ()=>{viewImgHandler(input, "his")};

  return <li className='chartContainer' onClick={onClickFunc}>
  <ResponsiveContainer width="100%" height={h}>
    <BarChart
      data={data}
      margin={{left: marginLeft, right: 5, top:25, bottom: 25}}
      barCategoryGap={0}
    >
      <XAxis
        dataKey="name"
        scale="band"
        tickLine={false}
        padding={{left: 10,right: 5}}
        label={{ value: input.xLabel, position: "insideBottom", dy: 20 }}
      />
      <YAxis label={{ value: input.yLabel, dx: -18 , angle: -90}}/>
      <Bar dataKey="val" label={{ fill: '#aaa', fontSize: 15, position: "top" }}>{
        data.map((_, index) => {
          return <Cell key={index} fill={(index % 2) ? "#aaa5ea" : "#8884d8"}/>;
        })
      }</Bar>
    </BarChart>
  </ResponsiveContainer>
</li>;
}