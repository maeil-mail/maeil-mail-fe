import * as React from 'react';
import WorkbookDetailContent from '@/components/workbookDetail/WorkbookDetailContent';

export default function Page() {
  return (
    <div style={{ padding: '0 2rem' }}>
      <div
        style={{
          padding: '4rem 0 8rem 0',
          margin: '0 auto',
          width: '100%',
          maxWidth: '110rem',
        }}
      >
        <WorkbookDetailContent />
      </div>
    </div>
  );
}
