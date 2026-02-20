import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense } from "react";
import { motion, AnimatePresence } from "motion/react";

const Home = lazy(() => import("./pages/Home/Home"));
const Agnce = lazy(() => import("./pages/Agnce/Agnce"));
const Paymark = lazy(() => import("./pages/Paymark/Paymark"));
const TeamSync = lazy(() => import("./pages/TeamSync/TeamSync"));
const Ezcard = lazy(() => import("./pages/Ezcard/Ezcard"));

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route
          path="/agnce"
          element={
            <PageWrapper>
              <Agnce />
            </PageWrapper>
          }
        />
        <Route
          path="/paymark"
          element={
            <PageWrapper>
              <Paymark />
            </PageWrapper>
          }
        />
        <Route
          path="/teamsync"
          element={
            <PageWrapper>
              <TeamSync />
            </PageWrapper>
          }
        />
        <Route
          path="/ezcard"
          element={
            <PageWrapper>
              <Ezcard />
            </PageWrapper>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
    // initial={{ opacity: 0, y: -30 }}
    // animate={{ opacity: 1, y: 0 }}
    // exit={{ opacity: 0, y: -30 }}
    // transition={{ duration: 0.4 }}
    // className="min-h-screen bg-neutral-950 text-white"
    >
      {children}
    </motion.div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="flex min-h-screen items-center justify-center bg-neutral-950 text-white">
            Loading...
          </div>
        }
      >
        <AnimatedRoutes />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
