export default function Button({ type1, content1, ref1 }:{type1:string, content1:string, ref1:string}) {

    return (
        <a href={ref1} className="hover:bg-[var(--color-third)] py-3 px-5 w-fit block text-center bg-[var(--color-fourth)]">
            <p className="font-bold">{content1}</p>
        </a>
    )
}