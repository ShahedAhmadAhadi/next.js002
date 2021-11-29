export default function handle(req, res) {
    res.clearPreviewData()
    res.end('Preview mode ended')
}