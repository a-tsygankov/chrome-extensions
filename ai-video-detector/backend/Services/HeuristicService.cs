public class HeuristicService
{
    public Task<object> AnalyzeAsync(DetectionRequest request)
    {
        // TODO: add ML or heuristic logic
        return Task.FromResult<object>(new { Confidence = 0.0, Label = "unknown" });
    }
}
