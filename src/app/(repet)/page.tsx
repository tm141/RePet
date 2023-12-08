import Hero from "../_ui/hero";
import OverView from "../_ui/overView";
import HomeServices from "../_ui/homeServices";
import Testimonials from "../_ui/testimonials";
import { TestimonialsSkeleton} from "../_ui/skeletons";
import { Suspense } from "react";

export default function Page(){
  return(
      <div>
        <Hero />
        <OverView />
        <HomeServices />
        <Suspense fallback={<TestimonialsSkeleton />}>
          <Testimonials />
        </Suspense>
      </div>
  )
}