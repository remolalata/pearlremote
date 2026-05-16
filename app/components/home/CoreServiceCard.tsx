import type { CoreServiceCardProps } from '../../types/home/components.types';

export function CoreServiceCard({
  description,
  featured = false,
  icon: Icon,
  title,
  wide = false,
}: CoreServiceCardProps) {
  return (
    <li
      className={`${featured ? 'border-service-card-featured bg-service-card-featured' : 'border-service-card-border bg-card-surface'} rounded-4xl border p-12 ${wide ? 'lg:col-span-3' : 'lg:col-span-2'}`}
    >
      <Icon
        aria-hidden='true'
        className={`mb-6 text-3xl ${featured ? 'text-heading' : 'text-primary'} ${wide ? 'lg:text-4xl' : ''}`}
        focusable='false'
      />
      <h3
        className={`font-display mb-2 text-lg font-semibold ${featured ? 'text-heading' : ''} ${wide ? 'lg:text-2xl' : ''}`}
      >
        {title}
      </h3>
      <p
        className={`text-sm ${featured ? 'text-heading' : ''} ${wide ? 'lg:text-base' : ''}`}
      >
        {description}
      </p>
    </li>
  );
}
