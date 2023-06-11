import { useEffect, useMemo, useState } from "react"
// 1.传进来的time变化 则倒计时重新开始 2.刷新页面 拿到上次继续的时间
export interface CountDownProps {
    isMilliSecond?: boolean,
    time: number | string,
}
const CountDown: React.FC<CountDownProps> = (props) => {
    const {
        isMilliSecond=false,
        time=100
    } = props
    const [duration, setDuration] = useState(isMilliSecond ? Math.round(+time/1000) : Math.round(+time));
    const [days, setDays]=useState<string | number>('0')
    const [hours, setHours] = useState<string | number>('0')
    const [mins, setMins] = useState<string | number>('0')
    const [seconds, setSeconds] = useState<string | number> ('0')
    let timer = null;
    const durationFormatter = (time) => {
        if(!time) {
            return {ss: 0};
        }
        let t = time;
        const ss = time % 60;
        t = (t - ss) / 60;
        if(t<1)return {ss};
        const mm = t%60;
        t=(t-mm)/60
        if(t<1)return {mm,ss};
        const hh = t%24;
        t=(t-hh)/24;
        if(t<1)return {hh, mm, ss};
        const dd = t;
        return {dd, hh, mm, ss};
    }
    let nowTime=duration;
    let count=0;
    const countDown = (time) => {
        count++;
        // 如果同一时刻触发了两个timer 任务队列里面有两个减一秒 则一秒的时间内会减去两秒是错误的 因此要在执行前先清除上次遗留的timer
        timer && clearTimeout(timer)
        if(time < 0) {
            return;
        }
        const {dd, hh, mm, ss} = durationFormatter(time)
        nowTime = time;
        setDays(dd || 0)
        setHours(hh || 0)
        setMins(mm || 0)
        setSeconds(ss || 0)
        /* setTimeout模拟setInterval原因：
        setInterval在每次把任务push到任务队列前 会判断一下上次任务是否还在队列中，如果在
        就不会把任务放进队列，这样可能导致某些间隔会被跳过，setTimeout产生的任务会直接push到任务队列
        */
        setTimeout(() => {
            countDown(time-1);
        }, 1000)
    }
    function beforeunload() {
        // 刷新页面前
        if(nowTime) {
            sessionStorage.setItem('duration', nowTime);
        }
    }
    useEffect(() => {
        // 拦截判断是否离开当前页面
        window.addEventListener('beforeunload', beforeunload);
        if(sessionStorage.getItem('duration')){
            // 上次的时间继续
            countDown(+sessionStorage.getItem('duration'));
        } else {
            countDown(duration)
        }
        return () => {
            window.removeEventListener('beforeunload', beforeunload);
        }
    },[duration])
    return (
        <div>
            {days}:{hours}:{mins}:{seconds}
        </div>
    )
}
export default CountDown