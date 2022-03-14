import cx from 'classnames'

const ContentBlockMetricItem = ({metric, caption, className}) => {
    let classNames = cx(className, "w-full px-4 md:w-1/2 inline-flex flex-col xl:w-full");
  return (
    <div className={classNames}>
        <span className='text-7xl md:text-9xl lg:text-7xl leading-tight text-forest'>{metric}</span>
        <span className='text-base md:text-lg lg:text-base font-body md:mt-1 lg:mt-1 '>{caption}</span>
    </div>
  )
}

export default ContentBlockMetricItem