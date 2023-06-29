import { Button, ButtonGroup } from '@chakra-ui/react'

const DaySelect = ({ handleDaySelect }) => {
    return (
        <ButtonGroup isAttached variant='outline'>
            <Button onClick={() => handleDaySelect("24_hours")}>24h</Button>
            <Button onClick={() => handleDaySelect("7_days")}>7d</Button>
            <Button onClick={() => handleDaySelect("14_days")}>14d</Button>
            <Button onClick={() => handleDaySelect("30_days")}>30d</Button>
            <Button onClick={() => handleDaySelect("90_days")}>90d</Button>
            <Button onClick={() => handleDaySelect("180_days")}>180d</Button>
            <Button onClick={() => handleDaySelect("365_days")}>1y</Button>
            <Button onClick={() => handleDaySelect("max")}>Max</Button>

        </ButtonGroup>
    )
}

export default DaySelect