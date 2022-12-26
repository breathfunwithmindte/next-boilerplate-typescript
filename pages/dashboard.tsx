import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'
import { PageProp } from '../src/interfaces/PageProp'
import { TemplateProp } from '../src/interfaces/TemplateProp'
import BaseTemplate from '../src/templates/Base/BaseTemplate';
import { baseTemplateDefault } from '../src/templates/Base/BaseTemplateDefault';
import delay from '../src/utils/delay';



export default function dashboardPage({
  templateprops
}: InferGetServerSidePropsType<typeof getServerSideProps>) {

  console.log(templateprops);

  return (
    <BaseTemplate {...templateprops}>
      <p>template here content insside</p>
    </BaseTemplate>
  )
}



export async function getServerSideProps(ctx: GetServerSidePropsContext) {

  await delay(500);


  return {
    props: { templateprops: baseTemplateDefault }
  }
}