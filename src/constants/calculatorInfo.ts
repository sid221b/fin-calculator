const calculatorInfo = {
  sip: {
    title: 'Systematic Investment Plan (SIP)',
    faqs: [
      {
        ques: 'What is SIP?',
        ans:
          'Systematic Investment Plan or SIP is the most disciplined style of investment in which a fixed amount of money is invested at regular intervals (yearly, quarterly, monthly). For SIP you will have to decide the investment amount, the SIP date and the scheme in which you want to invest.',
      },
      {
        ques: 'What are the benefits of SIP?',
        ans:
          'In SIP you invest money without speculating the market condition i.e. one invests without timing the market. So, in SIP the investments are done over different market cycles and therefore you benefit from rupee-cost averaging factor. With SIP one can stay invested for a longer period of time thus, your money stays invested and generates return over a long term. So, your investment gets sufficient time to enjoy the power of compounding. One can start a SIP with very small investment say Rs 500 per month. This means that you need not commit huge amount of money that is difficult to pay in future.',
      },
      {
        ques: 'Can I miss the payment of SIP?',
        ans:
          'Yes, one can miss the payment of SIP if the fund that you have chosen provides the facility to pause the payment.',
      },
      {
        ques: 'Do SIPs offer Tax Benefits?',
        ans:
          'The SIP investment done through ELSS (Equity Linked Savings Scheme) offers maximum tax benefits up to 1.5 lakh rupees per year under section 80C.',
      },
      {
        ques: 'What’s the difference between Lumpsum and SIP?',
        ans:
          'In lumpsum investment one needs to invest only once whereas, in SIP or Systematic Investment Plan one invests a fixed amount periodically. In lumpsum investment style the market condition plays a huge role because if the market makes a major correction after your investment, then it might take few years to reach your original investment amount. Whereas, in SIP or systematic investment style one need not worry about timing the market as investment is made during both ups and downs of the market. Therefore, the return generated is weighted average return.',
      },
    ],
  },
  lumpSum: {
    title: 'Lumpsum Calculator',
    faqs: [
      {
        ques: 'What is a Lumpsum Investment?',
        ans:
          'Lumpsum investment or one-time investment is a style of investment in which you invest once (lumpsum) and allow your invested money to generate compounding returns over a given time frame.',
      },
      {
        ques: 'What is a Lump sum Calculator?',
        ans:
          'A lump sum calculator is a utility tool that shows you the wealth gained over the long-term. It is a smart tool to calculate the return on a lump-sum mutual fund investment. A lump sum calculator consists of a formula box, where you enter the investment amount, investment period in years, and the annual rate of return expected on the investment. The lump-sum calculator will show you the expected amount and the wealth gain in seconds.',
      },
      {
        ques: 'When should one prefer Lumpsum Investment?',
        ans:
          'Ideally any investment (whether lumpsum or SIP) should be done keeping in mind various things like current income, risk profile, age, tax constraints, liquidity needs, time frame and certain other unique constraints. Lumpsum investment is preferred when one has large amount of surplus funds and more importantly if he/she thinks that market has majorly corrected or it won’t fall just after making the investment. Lumpsum investment done over a longer period helps generate compounding rate of returns.',
      },
      {
        ques: 'What’s the difference between Lumpsum and SIP?',
        ans:
          'In lumpsum investment one needs to invest only once whereas, in SIP or Systematic Investment Plan one invests a fixed amount periodically. In lumpsum investment style the market condition plays a huge role because if the market makes a major correction after your investment, then it might take few years to reach your original investment amount. Whereas, in SIP or systematic investment style one need not worry about timing the market as investment is made during both ups and downs of the market. Therefore, the return generated is weighted average return.',
      },
    ],
  },
  cagr: {
    title: 'Compound Annual Growth Rate (CAGR)',
    faqs: [
      {
        ques: 'What is Compound Annual Growth Rate (CAGR)?',
        ans:
          'The compound annual growth rate, or CAGR for short, is the average rate at which some value (investment) grows over a certain period of time assuming the value has been compounding over that time period.',
      },
      {
        ques: 'Where CAGR Calculator matters ?',
        ans:
          'The compound annual growth are applied at various places of personal finance. It is often used to calculate the average growth of single investment over a certain period. CAGR can be applied in comparing return on equity with bonds or savng accounts. Further, it can be used to compare the performance of two companies and forecasting their future growth based on their historical data.',
      },
      {
        ques: 'Limitation of CAGR ?',
        ans:
          'CAGR doesn’t accounts for volatility. It calculates only the average percentage return and so CAGR values should never taken as only tool for investment return assessment.',
      },
    ],
  },
  swp: {
    title: 'Systematic Withdrawal Plan (SWP)',
    faqs: [
      {
        ques: 'What is SWP?',
        ans:
          'Systematic Withdrawal Plan or SWP is a mutual fund investment facility which allows you to draw a fixed amount from your mutual fund investments at a specified frequency (monthly, quarterly, annual etc.); you can specify the day of the month/ quarter when the withdrawal should be made and the amount will be credited directly to your bank account on the specified day. You can continue your SWP as long as there are balance units in your mutual fund scheme account.',
      },
      {
        ques: 'How does SWP work?',
        ans:
          'SWP generates cash-flows by redeeming units of your mutual fund scheme. The number of units redeemed for each SWP payout will depend on the SWP amount (as specified by you) and the prevailing NAV on the date when the SWP payment is made.',
      },
      {
        ques: 'When can one use an SWP?',
        ans:
          'When an investor needs a consistent cash flow from his/her investments, he/she might opt for an SWP. Every person’s need for a SWP is different. SWP can be used for a variety of purposes, including children’s education, EMI repayment, and retirement.',
      },
      {
        ques: 'How does long-term and short-term capital gain affect my tax implications?',
        ans: `For equity-oriented scheme: If your holding period is less than 1 year, the gains will be calculated as short-term capital gains and will be taxed at 15% and if the holding period is more than 1 year, then long-term capital gains tax of 10% will be levied if the total capital gains exceed ₹1,00,000 in a year.
        \nFor debt-oriented scheme: If your holding period is less than 3 years, gains will be calculated as short-term capital gains and will be taxed as per the investors’ tax slab and if the holding period is more than 3 years, then long-term capital gains tax of 20% will be levied with the benefit of indexation.`,
      },
    ],
  },
}

export type CalcInfoType = 'sip' | 'lumpSum' | 'cagr' | 'swp'

export type FaqType = { ques: string; ans: string }

export interface PageInfoType {
  title: string
  faqs: FaqType[]
}

export default calculatorInfo
