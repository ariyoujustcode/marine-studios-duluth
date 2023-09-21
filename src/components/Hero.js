import React from 'react';
import './Hero.css';
import InlineSVG from 'react-inlinesvg';

const svgData = `<svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" width="773.11417" height="610.8036" viewBox="0 0 773.11417 610.8036" xmlns:xlink="http://www.w3.org/1999/xlink"><rect id="e81a7c33-c795-457d-8abc-c4a3c260cd56" data-name="Rectangle 62" x="309.47335" y="12.71102" width="463.64082" height="220.00561" fill="#e6e6e6"/><rect id="be98c830-918a-42d1-b1b0-0085d5874e90" data-name="Rectangle 75" x="322.73131" y="31.57689" width="437.12554" height="183.55756" fill="#fff"/><rect id="ea07d9fd-7a34-4098-acd7-056fd1871281" data-name="Rectangle 80" x="309.27566" width="463.64082" height="19.69684" fill="#1f2937"/><circle id="b9ed5a45-8896-4ed9-86b4-15f853c9a185" data-name="Ellipse 90" cx="323.91285" cy="11.58218" r="3.65074" fill="#fff"/><circle id="a9233a38-f8ba-48e0-88f3-496fd4836d40" data-name="Ellipse 91" cx="337.76985" cy="11.58218" r="3.65074" fill="#fff"/><circle id="aa82180f-a6a9-4f5f-82fc-e73106f4ad92" data-name="Ellipse 92" cx="351.62748" cy="11.58218" r="3.65074" fill="#fff"/><rect x="584.2717" y="61.27926" width="72.6761" height="124.15499" fill="#f2f2f2"/><rect x="425.64037" y="61.27709" width="146.59028" height="34.17507" fill="#1f2937"/><rect x="425.64037" y="104.96926" width="146.59028" height="36.77064" fill="#f2f2f2"/><rect x="425.64037" y="151.25701" width="146.59028" height="34.17507" fill="#f2f2f2"/><path d="M434.6459,511.69953a17.86664,17.86664,0,0,0-19.78976-17.86231,17.20233,17.20233,0,0,0-2.34789.43277l-60.46411-51.82742,3.61319-19.47549-29.8018-9.65812-8.9854,31.2107a18.10285,18.10285,0,0,0,7.6802,20.20409l74.38136,47.04492a17.0684,17.0684,0,0,0,.09142,1.75175,17.86684,17.86684,0,0,0,21.691,15.50179,17.38164,17.38164,0,0,0,2.10507-.60774A17.92013,17.92013,0,0,0,434.6459,511.69953Z" transform="translate(-213.44291 -144.5982)" fill="#FAF3E0"/><path d="M284.32471,571.80732h77.958c0,2.24085,80.34537,4.05949,80.34537,4.05949a20.88352,20.88352,0,0,1,3.426,3.24759,20.15185,20.15185,0,0,1,4.70964,12.99037v3.24759A20.30493,20.30493,0,0,1,430.4663,615.6498H284.32471a20.31509,20.31509,0,0,1-20.29744-20.29744v-3.24759A20.32567,20.32567,0,0,1,284.32471,571.80732Z" transform="translate(-213.44291 -144.5982)" fill="#3f3d56"/><rect x="134.57286" y="470.24525" width="21.10934" height="136.39882" fill="#3f3d56"/><path d="M429.20555,752.939c0,2.5538-31.9879.98788-71.447.98788s-71.447,1.566-71.447-.98788,31.9879-22.80584,71.447-22.80584S429.20555,750.3851,429.20555,752.939Z" transform="translate(-213.44291 -144.5982)" fill="#3f3d56"/><polygon points="196.707 589.916 216.613 589.914 226.084 538.282 196.703 538.284 196.707 589.916" fill="#FAF3E0"/><path d="M405.0721,753.81057l64.18948-.00238v-.81189a24.98376,24.98376,0,0,0-24.9835-24.98409h-.00258l-39.20459.00158Z" transform="translate(-213.44291 -144.5982)" fill="#2f2e41"/><path d="M439.924,702.4959l39.68705-88.99646a32.61556,32.61556,0,0,0-14.31961-41.86823l-86.083-46.16083-39.2815-3.34115-36.2345-3.29358-.26125.44242c-.3342.56453-8.12493,14.0211-2.85869,28.77639,3.99457,11.19214,14.385,19.93431,30.88264,25.9839,38.50726,14.11941,82.99077,26.187,100.32844,30.719a5.60369,5.60369,0,0,1,3.5905,2.8575,5.68054,5.68054,0,0,1,.31874,4.54472L398.82211,694.997a7.307,7.307,0,0,0,6.18557,9.79034l27.55021,2.006q.35085.0333.69852.0333A7.3021,7.3021,0,0,0,439.924,702.4959Z" transform="translate(-213.44291 -144.5982)" fill="#cbcbcb"/><polygon points="183.716 589.916 203.622 589.914 213.094 538.282 183.713 538.284 183.716 589.916" fill="#FAF3E0"/><path d="M392.08174,753.81057l64.18947-.00238v-.81189a24.98375,24.98375,0,0,0-24.98349-24.98409h-.00258l-39.20459.00158Z" transform="translate(-213.44291 -144.5982)" fill="#2f2e41"/><path d="M425.30988,707.36729l39.68705-88.99646a32.61558,32.61558,0,0,0-14.31961-41.86824l-86.083-46.16082-39.2815-3.34115-28.38066-2.46184.00388-.38932c-.33419.56452-8.12492,14.02109-2.85868,28.77638,3.99457,11.19214,6.266,19.93431,22.76366,25.9839,38.50726,14.11941,82.99077,26.187,100.32844,30.719a5.60372,5.60372,0,0,1,3.5905,2.8575,5.68056,5.68056,0,0,1,.31874,4.54473L384.208,699.86833a7.307,7.307,0,0,0,6.18557,9.79035l27.55021,2.006q.35085.0333.69852.0333A7.30209,7.30209,0,0,0,425.30988,707.36729Z" transform="translate(-213.44291 -144.5982)" fill="#cbcbcb"/><path d="M350.51745,526.16257c1.90279-1.346,29.22832,12.99037,34.09971,1.6238-22.73314-56.83284-7.06762-81.37433-20.99278-113.96521a40.58128,40.58128,0,0,0-26.90124-23.02491l-36.12866-1.8236-.18712.09039a42.22708,42.22708,0,0,0-23.08923,44.79783c.12853,35.46886,21.35037,62.52084,13.92991,88.24705a8.31687,8.31687,0,0,0,.78574,6.46823,7.93084,7.93084,0,0,0,5.05929,3.74947l47.70464-6.36356a8.061,8.061,0,0,0,6.52214-1.26225Z" transform="translate(-213.44291 -144.5982)" fill="#2f2e41"/><circle cx="99.20882" cy="190.99814" r="39.88209" fill="#FAF3E0"/><path d="M299.94834,372.20305c2.119.92721,6.45835-15.95756,4.51455-19.33465-2.89075-5.02229-2.71986-4.98621-4.63887-8.30894s-2.34839-7.87074.13667-10.79436,8.23583-2.53577,9.37,1.12986c-.72958-6.96252,6.15725-12.55932,12.97892-14.13211s14.01732-.5963,20.87662-1.99592c7.96055-1.62432,16.2431-8.29715,13.067-17.051a12.32977,12.32977,0,0,0-2.40493-3.95245c-3.66966-4.126-8.80288-5.88779-13.82183-7.59131-10.4411-3.54387-21.16788-7.13225-32.18706-6.741-18.10539.64277-35.21955,13.15863-41.31952,30.2176a42.47288,42.47288,0,0,0-1.75928,6.53634c-3.7822,20.33678,8.02752,40.39668,27.20868,48.1409Z" transform="translate(-213.44291 -144.5982)" fill="#2f2e41"/><path d="M509.09721,436.33656l4.57346,27.15606a1.67186,1.67186,0,0,1-.09645.89874l-35.88045,89.65335a1.67163,1.67163,0,0,1-3.22212-.55063l-1.51993-36.02744a1.67151,1.67151,0,0,1,.12149-.69977l32.82692-80.782a1.67164,1.67164,0,0,1,3.19708.35168Z" transform="translate(-213.44291 -144.5982)" fill="#3f3d56"/><polygon points="293.114 293.823 297.46 317.153 265.619 398.964 261.485 372.647 293.114 293.823" fill="#1f2937"/><path d="M367.24714,553.62768c.78342,3.05836,103.64017,6.36858,104.70682,5.44356a21.67414,21.67414,0,0,0,2.47407-3.82766c1.07778-1.92515,2.07587-3.856,2.07587-3.856l-1.6905-32.52915L373.49208,508.0306s-4.48257,27.14579-5.88985,39.617A29.957,29.957,0,0,0,367.24714,553.62768Z" transform="translate(-213.44291 -144.5982)" fill="#3f3d56"/><polygon points="248.114 377.702 248.123 405.727 203.309 402.541 205.292 374.657 248.114 377.702" opacity="0.1" style="isolation:isolate"/><polygon points="189.717 382.557 189.988 382.523 187.872 394.437 162.975 392.667 163.825 380.716 189.717 382.557" opacity="0.1" style="isolation:isolate"/><path d="M367.24714,553.62768c.78342,3.05836,103.64017,6.36858,104.70682,5.44356a21.67414,21.67414,0,0,0,2.47407-3.82766l-106.8258-7.596A29.957,29.957,0,0,0,367.24714,553.62768Z" transform="translate(-213.44291 -144.5982)" opacity="0.1" style="isolation:isolate"/><path d="M325.94633,505.05131l86.76393,16.192a17.07827,17.07827,0,0,0,.73363,1.59338,17.90571,17.90571,0,0,0,11.49146,8.97255,17.72,17.72,0,0,0,14.39865-2.60867,17.8638,17.8638,0,0,0-18.475-30.51175,17.16787,17.16787,0,0,0-2.02,1.27194l-75.361-25.744-3.85719-19.42893L308.36136,456.856l3.239,32.56972A17.76744,17.76744,0,0,0,325.94633,505.05131Z" transform="translate(-213.44291 -144.5982)" fill="#FAF3E0"/><path d="M307.30246,471.3831l45.42218-14.92881-10.59552-30.42282a18.135,18.135,0,0,0-20.10734-11.92359h0a18.13492,18.13492,0,0,0-15.15252,18.08864Z" transform="translate(-213.44291 -144.5982)" fill="#2f2e41"/><path d="M595.44291,755.4018h-381a1,1,0,1,1,0-2h381a1,1,0,0,1,0,2Z" transform="translate(-213.44291 -144.5982)" fill="#cbcbcb"/><path d="M743.64988,723.89539c18.27372,9.45731,26.39842,30.0488,26.39842,30.0488s-21.50286,5.25812-39.77654-4.19918-26.39843-30.04881-26.39843-30.04881S725.37615,714.43807,743.64988,723.89539Z" transform="translate(-213.44291 -144.5982)" fill="#f1f1f1"/><path d="M737.80616,730.70767c10.90465,17.44872,32.08594,23.881,32.08594,23.881s3.50132-21.85773-7.40333-39.30649-32.08594-23.881-32.08594-23.881S726.90145,713.259,737.80616,730.70767Z" transform="translate(-213.44291 -144.5982)" fill="#f1f1f1"/><path d="M803.44291,755.00527h-114a1,1,0,0,1,0-2h114a1,1,0,0,1,0,2Z" transform="translate(-213.44291 -144.5982)" fill="#cbcbcb"/></svg>`;

function Hero() {
  return(
    <div id='home'>
      <div className='placeholder'></div>
      <div className='hero'>
        <div className='hero-image'>
          <InlineSVG src={svgData} className='hero-svg'/>
        </div>
        <h1>Ari Marine - Web Developer</h1>
        <h2 id='ari'>Ari Marine</h2>
        <h3 id='dev'>Web Developer</h3>
        <a href='#contact' id='contact-me'>Contact Me</a>
        <p>Duluth, MN</p>
      </div>
    </div>
  )
}

export default Hero;