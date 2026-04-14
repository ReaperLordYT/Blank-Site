import React from 'react';
import PageLayout from '@/components/PageLayout';
import { useTournament } from '@/context/TournamentContext';
import { Wrench } from 'lucide-react';

const Maintenance: React.FC = () => {
  const { data } = useTournament();
  const settings = data.settings;

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-20 min-h-[60vh] flex items-center justify-center">
        <div className="glass-card rounded-2xl p-10 max-w-2xl text-center card-glow">
          <Wrench className="mx-auto mb-5 text-primary" size={48} />
          <h1 className="font-display text-4xl font-bold gradient-text mb-4">{settings.maintenanceTitle}</h1>
          <p className="text-muted-foreground text-lg">{settings.maintenanceMessage}</p>
        </div>
      </div>
    </PageLayout>
  );
};

export default Maintenance;
