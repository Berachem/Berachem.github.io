import { Company } from '../types';

interface CompanySectionProps {
  companies: Company[];
}

export const CompanySection = ({ companies }: CompanySectionProps) => {
  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {companies.map((company) => (
        <img
          key={company.name}
          src={company.logo}
          alt={company.name}
          className="grayscale hover:grayscale-0 transition-all duration-300 w-15 h-24 object-contain mx-auto"
        />
      ))}
    </div>
  );
};