import Head from 'next/head';
import React from 'react';
import config from '../../config.json';
import { Input } from '../components/input';
import { useHistory } from '../components/history/hook';
import { History } from '../components/history/History';
import { banner, contact } from '../utils/bin';



interface IndexPageProps {
  inputRef: React.MutableRefObject<HTMLInputElement>;
}

const IndexPage: React.FC<IndexPageProps> = ({ inputRef }) => {
  const containerRef = React.useRef(null);
  const {
    history,
    command,
    lastCommandIndex,
    setCommand,
    setHistory,
    clearHistory,
    setLastCommandIndex,
  } = useHistory([]);

  const init = React.useCallback(() => setHistory(banner()), []);

  React.useEffect(() => {
    init();
  }, [init]);

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.scrollIntoView();
      inputRef.current.focus({ preventScroll: true });
    }
  }, [history]);

  return (
    <>
      <Head>
        <title>{config.title}</title>
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;700&display=swap" rel="stylesheet" />
      </Head>

      <div className="p-4 overflow-hidden h-full pt-36">

        <div
          className="text-center font-bold text-light-yellow dark:text-dark-yellow"
          style={{
            color: '#00FF00',
            fontFamily: 'Roboto Mono, monospace',
            fontSize: '50px',
            letterSpacing: '-6px',
            marginBottom: '32px',
          }}
        >
          jeromevillanueva:$
        </div>

        <div className="text-center mb-5">
          <button
            onClick={async () => {
              const contactResult = await contact([]);
              setHistory([contactResult].join('\n'));
              setCommand('');
              inputRef.current?.focus();
            }}
            className="px-3 py-0 rounded text-light-yellow dark:text-dark-yellow"
            style={{
              fontFamily: 'Roboto Mono, monospace',
              fontSize: '20px',
              letterSpacing: '0px'
            }}
          >
            /Contact
          </button>

          <button
            onClick={async () => {
              const contactResult = await contact([]);
              setHistory([contactResult].join('\n'));
              setCommand('');
              inputRef.current?.focus();
            }}
            className="px-3 py-0 rounded text-light-yellow dark:text-dark-yellow"
            style={{
              fontFamily: 'Roboto Mono, monospace',
              fontSize: '20px',
              letterSpacing: '0px'
            }}
          >
            /Resume
          </button>
        </div>

        <div ref={containerRef} className="overflow-y-auto h-full">
          <History history={history} />

          <Input
            inputRef={inputRef}
            containerRef={containerRef}
            command={command}
            history={history}
            lastCommandIndex={lastCommandIndex}
            setCommand={setCommand}
            setHistory={setHistory}
            setLastCommandIndex={setLastCommandIndex}
            clearHistory={clearHistory}
          />
        </div>
      </div>
    </>
  );
};

export default IndexPage;
