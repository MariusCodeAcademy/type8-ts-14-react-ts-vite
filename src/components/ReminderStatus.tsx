// sukurti ReminderStatus
// <ReminderStatus status={true}  />
// gaus pros status: boolean
// jei status true tai generuojam kaip melyno fono el
// jei status false tai generuojam kaip pilko fono el
interface ReminderStatusProps {
  status: boolean;
}

function ReminderStatus(props: ReminderStatusProps): JSX.Element {
  if (props.status) {
    return <span className='r-done'>Completed</span>;
  }
  return <span className='r-active'>Active</span>;
}

export default ReminderStatus;
