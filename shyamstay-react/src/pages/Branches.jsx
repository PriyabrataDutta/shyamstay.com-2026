import Breadcrumb from '../components/Common/Breadcrumb'
import BranchGrid from '../components/Home/BranchGrid'

export default function Branches() {
  return (
    <main>
      <Breadcrumb title="Our Branches" subtitle="Branches" />
      <div className="branches-page-wrapper py-5">
        <BranchGrid hideTitle={true} showAll={true} />
      </div>
    </main>
  )
}
