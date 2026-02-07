export function useSmartLink() {
    const GITHUB_USER = 'KClO4-Li';
    const REPO_NAME = 'KClO4-Li.github.io';
    const handleLink = async (event) => {
        // 阻止标签默认跳转
        event.preventDefault();

        const link = event.currentTarget;
        const path = link.getAttribute('href');
        // 处理路径：确保去掉开头的斜杠，以便拼接 CDN 地址
        const cleanPath = path.startsWith('/') ? path.slice(1) : path;

        const cdnUrl = `https://cdn.jsdelivr.net/gh/${GITHUB_USER}/${REPO_NAME}/${cleanPath}`;
        const originUrl = window.location.origin + path;

        // 设置探测超时：2秒（2000ms）
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 2000);

        try {
            // 像发射探测脉冲一样尝试连接 CDN
            await fetch(cdnUrl, {
                method: 'HEAD',
                mode: 'no-cors',
                signal: controller.signal
            });

            // 探测成功，清除定时器并跳转 CDN
            clearTimeout(timeoutId);
            window.open(cdnUrl, '_blank');
        } catch (e) {
            // 探测失败（超时、断网、404），清除定时器并走原站
            clearTimeout(timeoutId);
            console.warn('CDN 链路受阻，已回退至原站资源');
            window.open(originUrl, '_blank');
        }
    };

    return { handleLink };
}