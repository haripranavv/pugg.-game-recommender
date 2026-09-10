CREATE TABLE IF NOT EXISTS public.saved_games (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    game_title TEXT NOT NULL,
    genre TEXT,
    meta TEXT,
    steam_url TEXT,
    rating TEXT,
    price_inr NUMERIC DEFAULT 0,
    is_free BOOLEAN DEFAULT FALSE,
    vfm_score NUMERIC DEFAULT 10.0,
    saved_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    UNIQUE(user_id, game_title)
);

CREATE INDEX IF NOT EXISTS idx_saved_games_user_id ON public.saved_games(user_id);

ALTER TABLE public.saved_games ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS pugg_select_policy ON public.saved_games;
CREATE POLICY pugg_select_policy ON public.saved_games FOR SELECT TO authenticated USING (auth.uid() = user_id);

DROP POLICY IF EXISTS pugg_insert_policy ON public.saved_games;
CREATE POLICY pugg_insert_policy ON public.saved_games FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS pugg_delete_policy ON public.saved_games;
CREATE POLICY pugg_delete_policy ON public.saved_games FOR DELETE TO authenticated USING (auth.uid() = user_id);