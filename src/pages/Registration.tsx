import React from 'react';
import PageLayout from '@/components/PageLayout';
import { useTournament } from '@/context/TournamentContext';
import EditableText from '@/components/EditableText';
import { motion } from 'framer-motion';
import { FileText, Users, AlertTriangle } from 'lucide-react';

const Registration: React.FC = () => {
  const { data, updateSettings } = useTournament();
  const settings = data.settings;

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl font-bold gradient-text mb-6 text-center">Регистрация</h1>
          <EditableText
            value={settings.registrationDeadlineText}
            onSave={val => updateSettings({ registrationDeadlineText: val })}
            as="p"
            className="text-center text-muted-foreground mb-12 text-lg"
          />

          <div className="glass-card rounded-2xl p-8 mb-8 card-glow">
            <h2 className="font-heading text-2xl font-bold mb-4 text-foreground flex items-center gap-2">
              <FileText className="text-primary" size={24} /> Как подать заявку
            </h2>
            <EditableText
              value={settings.registrationHowToText}
              onSave={val => updateSettings({ registrationHowToText: val })}
              as="p"
              className="text-muted-foreground mb-6"
            />
            <a
              href={data.settings.googleFormLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-gradient px-8 py-3 rounded-lg text-lg inline-flex items-center gap-2"
            >
              <Users size={20} /> Подать заявку
            </a>
          </div>

          <div className="glass-card rounded-2xl p-8 card-glow">
            <h2 className="font-heading text-2xl font-bold mb-6 text-foreground flex items-center gap-2">
              <AlertTriangle className="text-primary" size={24} /> Правила участия
            </h2>
            <ul className="space-y-4 text-muted-foreground">
              {settings.registrationRules.map((text, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center font-heading font-bold text-sm flex-shrink-0 mt-0.5">{i + 1}</span>
                  <EditableText
                    value={text}
                    onSave={val => {
                      const next = [...settings.registrationRules];
                      next[i] = val;
                      updateSettings({ registrationRules: next });
                    }}
                    as="span"
                    className="text-muted-foreground"
                  />
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default Registration;
