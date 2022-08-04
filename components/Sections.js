import Cards from "./Cards"

const Sections = () => {
    return(
        <div className="p-6 lg:p-10">
            <div className="flex flex-col items-center">
                <h2 className="text-black font-semibold text-2xl md:text-4xl">Sections</h2>
                <div className="bg-darkBlood w-32 h-1 mt-2.5"></div>
                <div className="mt-2.5 grid grid-rows-1 md:grid-cols-2 xl:grid-cols-3 gap-4 space-y-4">
                    <div className="mt-4"><Cards image="/kgPri.jpg" title="KG and Primary School" desc="Using the latest approaches in early development learning, we have created a stimulating learning experience. Phonics, Play and Learn, Rhyming and Visualization are core principles we leverage to achieve excellent results." /></div>
                    <div><Cards image="/junSec.jpg" title="Junior Secondary School" desc="High standards in teaching and assessment rapidly gets students working hard towards excellence. Students are exposed to multimodal leaning which develops their all-round intelligence." /></div>
                    <div><Cards image="/senSec.jpg" title="Senior Secondary School" desc="A focus on critical thinking and practical application of knowledge gained produce innovative and independent problem solvers. Our students are prepared to face real-world tasks with confidence, exposure and research-based creativity." /></div>
                </div>
            </div>
        </div>
    )
}

export default Sections