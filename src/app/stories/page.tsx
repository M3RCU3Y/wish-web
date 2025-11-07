import { PageHero } from "@/components/page-hero";
import { storyHighlights } from "@/data/stories";

export default function StoriesPage() {
  return (
    <div className="space-y-10">
      <PageHero
        eyebrow="Stories"
        title="Dispatches from homes, observatories, and creative corners."
        description="These highlights will evolve into a story blog or gallery once photos, video, and copy are ready. For now, they signal the type of narratives we’ll feature."
      />

      <div className="space-y-5">
        {storyHighlights.map((story) => (
          <article
            key={story.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-6"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-sky-200">
              {story.location}
            </p>
            <h3 className="font-serif text-2xl text-white">{story.title}</h3>
            <p className="text-sm text-slate-200">{story.summary}</p>
            <p className="mt-2 text-xs uppercase tracking-wide text-amber-200">
              Impact · {story.impact}
            </p>
          </article>
        ))}
      </div>

      <div className="rounded-2xl border border-dashed border-white/20 bg-transparent p-6 text-sm text-slate-300">
        Drop-in idea: embed a story submission form, a gallery (powered by
        Sanity CMS or a Markdown folder), and quotes from WISH Upon a Star.
      </div>
    </div>
  );
}

