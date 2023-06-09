import { Button, ButtonGroup } from '@chakra-ui/react'

const DaySelect = ({ func }) => {
    return (
        // <div>
        //     <button onClick={() => func(1)}>7d</button>
        //     <button onClick={() => func(2)}>14d</button>
        //     <button onClick={() => func(4)}>28d</button>
        //     <button onClick={() => func(24)}>6 mo</button>
        //     <button onClick={() => func(52)}>YTD</button>
        // </div>
        <ButtonGroup isAttached variant='outline'>
            <Button onClick={() => func("24_hours")}>24h</Button>
            <Button onClick={() => func("7_days")}>7d</Button>
            <Button onClick={() => func("14_days")}>14d</Button>
            <Button onClick={() => func("30_days")}>30d</Button>
            <Button onClick={() => func("90_days")}>90d</Button>
            <Button onClick={() => func("180_days")}>180d</Button>
            <Button onClick={() => func("365_days")}>1y</Button>
            <Button onClick={() => func("max")}>Max</Button>

        </ButtonGroup>
    )
}

export default DaySelect