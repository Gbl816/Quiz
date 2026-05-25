(function(){
    const tokens = [
        '--color-bg-surface',
        '--color-bg-body',
        '--color-text',
        '--color-primary-500',
        '--color-primary-700'
    ];

    function getTokenValue(name){
        return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
    }

    function createPanel(){
        const panel = document.createElement('div');
        panel.className = 'debug-panel';

        const title = document.createElement('h4');
        title.textContent = 'Tokens resolvidos';
        panel.appendChild(title);

        tokens.forEach(t => {
            const row = document.createElement('div');
            row.className = 'debug-item';

            const label = document.createElement('div');
            label.textContent = t;
            label.style.opacity = '0.9';
            label.style.flex = '1';

            const valueWrap = document.createElement('div');
            valueWrap.style.display = 'flex';
            valueWrap.style.alignItems = 'center';
            valueWrap.style.gap = '0.5rem';

            const swatch = document.createElement('span');
            swatch.className = 'debug-swatch';
            const val = getTokenValue(t);
            swatch.style.background = val || 'transparent';

            const value = document.createElement('code');
            value.textContent = val || '---';
            value.style.fontSize = '0.75rem';
            value.style.opacity = '0.95';

            valueWrap.appendChild(swatch);
            valueWrap.appendChild(value);

            row.appendChild(label);
            row.appendChild(valueWrap);
            panel.appendChild(row);
        });

        const actions = document.createElement('div');
        actions.className = 'debug-actions';

        const btnTheme = document.createElement('button');
        btnTheme.className = 'debug-btn';
        btnTheme.textContent = 'Alternar tema';
        btnTheme.onclick = () => {
            const html = document.documentElement;
            if(html.getAttribute('data-theme') === 'dark') html.removeAttribute('data-theme');
            else html.setAttribute('data-theme','dark');
            // atualizar valores
            updateValues(panel);
        };

        const btnRefresh = document.createElement('button');
        btnRefresh.className = 'debug-btn';
        btnRefresh.textContent = 'Atualizar';
        btnRefresh.onclick = () => updateValues(panel);

        actions.appendChild(btnTheme);
        actions.appendChild(btnRefresh);
        panel.appendChild(actions);

        document.body.appendChild(panel);
    }

    function updateValues(panel){
        const rows = panel.querySelectorAll('.debug-item');
        rows.forEach(row => {
            const key = row.firstChild.textContent.trim();
            const val = getTokenValue(key);
            const swatch = row.querySelector('.debug-swatch');
            const code = row.querySelector('code');
            swatch.style.background = val || 'transparent';
            code.textContent = val || '---';
        });
    }

    window.addEventListener('DOMContentLoaded', createPanel);
})();
