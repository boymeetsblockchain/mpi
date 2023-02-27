import React from 'react'
import calculatorSm from "../assets/calculate_banner_sm.png"
import calculatorLg from "../assets/calculate_banner_lg.png"

const MbiCalculator = () => {
    return (
        <div>
            <div>
                <img loading='lazy' src={calculatorSm} className="md:hidden" />
                <img loading='lazy' src={calculatorLg} className="hidden md:flex" />
            </div>
            <div className='md:flex pt-10 mx-auto max-w-6xl'>
                <div className='md:border-r-2'>
                    <div className='py-2 px-6'>
                        <label className='block text-md'>Desired Retirement Age</label>
                        <input type="number" className='p-2 border-2 border-gray-400  rounded-lg w-full md:w-[350px]' />
                    </div>
                    <div className='py-2 px-6'>
                        <label className='block text-md'>Desired Retirement Age</label>
                        <input type="number" className='p-2 border-2 border-gray-400  rounded-lg w-full md:w-[350px]' />
                    </div>
                    <div className='py-2 px-6'>
                        <label className='block text-md'>Desired Retirement Age</label>
                        <input type="number" className='p-2 border-2 border-gray-400  rounded-lg w-full md:w-[350px]' />
                    </div>
                    <div className='py-2 px-6'>
                        <label className='block text-md'>Desired Retirement Age</label>
                        <input type="number" className='p-2 border-2 border-gray-400  rounded-lg w-full md:w-[350px]' />
                    </div>
                </div>
                <div className='flex-1 py-8 px-6'>
                    <div className='border-b-4 border-black pb-32 text-center'>
                        <h1>Side-by-Side Comparison</h1>
                    </div>
                    <div className='mt-8'>
                        <h2 className='text-center text-xl'>Projected Tax-Free Income Per Year</h2>
                        <div className='flex space-x-4 mt-3'>
                            <div className='flex flex-col items-center flex-1'>
                                <h2 className='text-sm font-light'>MPI® Premium Strategy</h2>
                                <button className='bg-yellow-500 border-2 border-black p-3 rounded-xl w-full font-semibold text-2xl'>$0</button>
                            </div>
                            <div className='flex flex-col flex-1 items-center'>
                                <h2 className='text-sm font-light'>MPI® Premium Strategy</h2>
                                <button className='border-2 border-black p-3 rounded-xl w-full font-semibold text-2xl text-red-600'>$0</button>
                            </div>
                        </div>
                        <h2 className='text-center'>This MPI® Premium Strategy is projected to produce up to <span className='font-semibold'>$0</span></h2>
                    </div>
                    <div className='mt-8'>
                        <h2 className='text-center text-xl'>Projected Tax-Free Income Per Year</h2>
                        <div className='flex space-x-4 mt-3'>
                            <div className='flex flex-col items-center flex-1'>
                                <h2 className='text-sm font-light'>MPI® Premium Strategy</h2>
                                <button className='bg-yellow-500 border-2 border-black p-3 rounded-xl w-full font-semibold text-2xl'>$0</button>
                            </div>
                            <div className='flex flex-col flex-1 items-center'>
                                <h2 className='text-sm font-light'>MPI® Premium Strategy</h2>
                                <button className='border-2 border-black p-3 rounded-xl w-full font-semibold text-2xl text-red-600'>$0</button>
                            </div>
                        </div>
                        <h2 className='text-center p-3'>This MPI® Premium Strategy is projected to produce up to $0 more than the Roth IRA/401K during your retirement.</h2>
                    </div>
                    <div className='mt-8'>
                        <h2 className='text-center text-2xl'>Projected Tax-Free Income Per Year</h2>
                        <div className='flex space-x-4'>
                            <div className='flex flex-col items-center flex-1'>
                                <h2 className='text-sm font-light py-3'>* Assumed Life Expectancy of 90 years old</h2>
                                <button className='bg-yellow-500 border-2 border-black p-3 rounded-xl w-full  text- capitalize'>Additional financail information</button>
                            </div>
                        </div>
                    </div>
                    <div className='px-6 pb-20 pt-10'>
                        <p className='text-xs font-light text-center'>*Projected Results are Estimates Only and Not Guaranteed. MPI® Premium Strategy Results Based on Using an Indexed Universal Life Insurance Policy With an Assumed Average Annual Return of 6.25% and Premium Strategy Participating Loan Rate of 4%. Additional Policy Underwriting May Be Required to Achieve Projected Results. Costs of Insurance and Policy Expenses are Taken from a State Approved Illustration and Are Based on a Similarly Aged Male at a Preferred Health Rating. Estimated Cash Value and Income Results May Vary Based on Actual Gender, Age, and Approved Health Rating. Roth IRA/ 401(k) Projections are Assumed 9% Market Growth With an Expense Ratio of 1% All-In Fees. Compound Results are Calculated On an Annual Basis. Roth IRA/ 401(k) Projected Income Based Off the 4% Rule.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MbiCalculator