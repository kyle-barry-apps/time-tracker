import Stat from "./Stat"

const StatList = ({stats}) => {

  return (
    <>
    {stats.map((stat, index) => (
      <Stat key={index} stat={stat} />
    )) }
    </>
  )
}

export default StatList