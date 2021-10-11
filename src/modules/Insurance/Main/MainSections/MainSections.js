import React from "react";

import {Section} from "./Section/Section";

import travel2 from '../../../../assets/travel2.jpg'
import travel3 from '../../../../assets/travel3.jpg'

export const MainSections = () => {
  return (
    <>
      <Section image={travel2} alt='' title='Insurance for International Visitors'>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda blanditiis dignissimos explicabo libero
          provident qui quo reiciendis sunt? Aliquam at beatae eum excepturi iste laboriosam nihil non qui veniam
          voluptas!</p>
        <ul>
          <li>List item #1</li>
          <li>List item #2</li>
          <li>List item #3</li>
        </ul>
      </Section>
      <Section revertOrder image={travel3} alt='' title='Safe travels'>
        <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci atque consectetur cum esse maiores
          optio quasi, quos vel? Dolore eius hic in numquam odit quis repellat tenetur veniam, vero vitae!</span><span>
          Ab accusamus ad asperiores commodi consequuntur cupiditate delectus dolor doloremque enim et eum, expedita
          iusto maiores molestiae mollitia necessitatibus neque obcaecati qui repellendus repudiandae, sequi totam ut
          veritatis voluptas voluptatum.</span></p>
      </Section>
    </>
  )
}