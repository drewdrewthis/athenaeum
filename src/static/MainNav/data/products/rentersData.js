const submenuItems = [
  {
    header: 'Compare Renters Insurance',
    items: [
      { title: 'How to buy cheap renters insurance online', url: '/renters-insurance/learn/how-to-buy-cheap-renters-insurance-online/', },
      { title: 'Replacement cost renters Insurance', url: '/renters-insurance/learn/replacement-cost-renters-insurance/', },
      { title: 'Cash value renters insurance', url: '/renters-insurance/learn/actual-cash-value-renters-insurance/', },
      { title: 'The Best Renters Insurance Companies', url: '/renters-insurance/learn/the-best-renters-insurance-companies/', },
    ],
  },
  {
    header: 'Helpful Resources',
    items: [
      { title: 'What Does Renters Insurance Cover?', url: '/renters-insurance/learn/what-does-renters-insurance-cover/', },
      { title: 'How Much Is Renters Insurance?', url: '/renters-insurance/learn/how-much-is-renters-insurance/', },
      { title: 'How Does Renters Insurance Work?', url: '/renters-insurance/learn/how-renters-insurance-works/', },
      { title: 'How Much Renters Insurance Do I Need?', url: '/renters-insurance/learn/how-much-renters-insurance-do-i-need/', },
      { title: 'Renters insurance FAQ', url: '/renters-insurance/learn/renters-insurance-faq/', },
    ],
  },
  {
    header: 'Renters Insurance Company Reviews',
    items: [
      { title: 'Geico', url: '/renters-insurance/companies/geico/', },
      { title: 'Progressive', url: '/renters-insurance/companies/progressive/', },
      { title: 'State Farm', url: '/renters-insurance/companies/state-farm/', },
      { title: 'Allstate', url: '/renters-insurance/companies/allstate/', },
    ],
  },

];

export default {
  menu: {
    header: 'Renters Insurance',
    link: '/renters-insurance/',
    activeName: 'renters-insurance',
  },
  intro: {
    cta: 'Get A Free Quote',
    imgSrc: 'https://res-5.cloudinary.com/policygenius/image/upload/v1/general/renters',
    linkHref: '/renters-insurance/',
  },
  list: {
    alt: 'Renters Insurance',
    items: submenuItems,
    type: 'articles',
  }
};
