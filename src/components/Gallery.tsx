import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Grid, Image, Eye, X, Laptop, Award, BookOpen, Building, Sparkles } from "lucide-react";

// Resolve custom Adarsh Institute infrastructure images
const adarshEntrance = new URL("../assets/images/adarsh_entrance_1783592081494.jpg", import.meta.url).href;
const adarshReceptionDesk = new URL("../assets/images/adarsh_reception_desk_1783592098744.jpg", import.meta.url).href;
const adarshCorridor = new URL("../assets/images/adarsh_corridor_hallway_1783592113063.jpg", import.meta.url).href;
const adarshLabStudents1 = new URL("../assets/images/adarsh_lab_students_1_1783592129241.jpg", import.meta.url).href;
const adarshClassroomTeacher = new URL("../assets/images/adarsh_classroom_teacher_1783592141446.jpg", import.meta.url).href;
const adarshLabStudents2 = new URL("../assets/images/adarsh_lab_students_2_1783592152496.jpg", import.meta.url).href;
const adarshClassroomProjector = new URL("../assets/images/adarsh_classroom_projector_1783592164564.jpg", import.meta.url).href;
const adarshLabGroup = new URL("../assets/images/adarsh_lab_group_1783592196550.jpg", import.meta.url).href;
const adarshStudentCollab = new URL("../assets/images/adarsh_student_collab_1783592209845.jpg", import.meta.url).href;
const adarshSeminarHall = new URL("../assets/images/adarsh_seminar_hall_1783592222349.jpg", import.meta.url).href;
const adarshAwardCeremony = new URL("../assets/images/adarsh_award_ceremony_1783592240914.jpg", import.meta.url).href;

interface GalleryImage {
  id: string;
  category: "all" | "labs" | "classrooms" | "library" | "events";
  title: string;
  description: string;
  imageUrl: string;
}

const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: "entrance",
    category: "classrooms",
    title: "Adarsh Institute Entrance Staircase",
    description: "Our professional welcoming entrance staircase displaying the Adarsh Computer Education board, courses, and credentials.",
    imageUrl: adarshEntrance
  },
  {
    id: "reception_desk",
    category: "classrooms",
    title: "Student Inquiry & Reception Desk",
    description: "Our friendly reception lobby and admission inquiry counter helping students explore curriculum pathways and course schedules.",
    imageUrl: adarshReceptionDesk
  },
  {
    id: "corridor_hallway",
    category: "classrooms",
    title: "Academic Corridor Showcase",
    description: "Bright, clean, and professional institute corridor with visible signboards for Counselling Office, Class Room 1, and emergency guides.",
    imageUrl: adarshCorridor
  },
  {
    id: "lab_students_1",
    category: "labs",
    title: "Main IT Computer Lab",
    description: "Fully-equipped high-performance computing lab where students learn programming, accounting, and design on modern LCD monitors.",
    imageUrl: adarshLabStudents1
  },
  {
    id: "lab_group",
    category: "labs",
    title: "Practical Software Lab Workspace",
    description: "Spacious laboratory seating for active student batches to practice coding challenges, financial modeling, and web design.",
    imageUrl: adarshLabGroup
  },
  {
    id: "student_collab",
    category: "library",
    title: "Study Area & Reference Library",
    description: "Dedicated study desks and resources encouraging student group learning, peer reference log checks, and interactive development discussions.",
    imageUrl: adarshStudentCollab
  },
  {
    id: "lab_students_2",
    category: "labs",
    title: "Hands-on Technical Practice",
    description: "Students diligently coding, practicing database queries, and keeping detailed reference logs during their software training.",
    imageUrl: adarshLabStudents2
  },
  {
    id: "classroom_teacher",
    category: "classrooms",
    title: "Interactive Interactive Lecture",
    description: "Experienced faculty explaining logic, database structures, and office automation concepts on the board in a dedicated classroom.",
    imageUrl: adarshClassroomTeacher
  },
  {
    id: "classroom_projector",
    category: "classrooms",
    title: "Smart Projector Classroom",
    description: "Modern classroom featuring hybrid display capability, ceiling-mounted projectors, and clean workspaces for optimized attention.",
    imageUrl: adarshClassroomProjector
  },
  {
    id: "seminar_hall",
    category: "events",
    title: "Student Seminars & Presentations",
    description: "Spacious interactive presentation hall where students demonstrate project work, participate in workshops, and attend guest seminars.",
    imageUrl: adarshSeminarHall
  },
  {
    id: "award_ceremony",
    category: "events",
    title: "Achievements & Certification Awards",
    description: "Celebrating student milestones, course completions, and diploma awards under high achievement benchmarks of Adarsh.",
    imageUrl: adarshAwardCeremony
  }
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<"all" | "labs" | "classrooms" | "library" | "events">("all");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const filteredImages = selectedCategory === "all"
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter(img => img.category === selectedCategory);

  return (
    <section id="gallery-infrastructure-section" className="py-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 relative transition-colors duration-300">
      
      {/* Decorative blurred rings */}
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-emerald-500/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full bg-red-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 dark:bg-red-950/40 text-red-700 dark:text-red-400 border border-red-100 dark:border-red-900/40 text-xs font-semibold tracking-wider uppercase shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-red-600 dark:text-red-400" />
            Infrastructure Showcase
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight leading-tight">
            Our World-Class <span className="bg-gradient-to-r from-red-600 via-emerald-600 to-emerald-800 bg-clip-text text-transparent">Infrastructure & Gallery</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Explore the advanced labs, modern hybrid classrooms, and active computer training space where students master computer literacy and digital craftsmanship.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12" id="gallery-category-filters">
          {[
            { id: "all", label: "All Showcase", icon: Grid },
            { id: "labs", label: "Computer Labs", icon: Laptop },
            { id: "classrooms", label: "Smart Classrooms", icon: Building },
            { id: "library", label: "Study & Library", icon: BookOpen },
            { id: "events", label: "Events & Awards", icon: Award }
          ].map((cat) => {
            const Icon = cat.icon;
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id as any)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-sans text-xs sm:text-sm font-semibold transition-all duration-300 shadow-sm border cursor-pointer ${
                  isActive
                    ? "bg-red-600 text-white border-red-600 shadow-md shadow-red-600/10 hover:bg-red-700"
                    : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-100 dark:border-slate-850 hover:border-slate-300 dark:hover:border-slate-700 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-slate-500 dark:text-slate-400"}`} />
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Images Grid */}
        <motion.div 
          layout 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          id="gallery-images-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={image.id}
                className="group relative bg-white dark:bg-slate-950 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden flex flex-col justify-between transition-colors duration-300"
                id={`gallery-card-${image.id}`}
              >
                {/* Image Wrap */}
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100 dark:bg-slate-900">
                  <img
                    src={image.imageUrl}
                    alt={image.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Subtle red & green overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-red-950/80 via-emerald-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <button
                      onClick={() => setSelectedImage(image)}
                      className="bg-white/95 text-red-600 p-3 rounded-xl shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-red-600 hover:text-white flex items-center gap-2 text-xs font-bold w-full justify-center cursor-pointer"
                    >
                      <Eye className="w-4 h-4" />
                      View Full Details
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-sans font-bold text-emerald-700 dark:text-emerald-400 uppercase bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded-full inline-block">
                      {image.category === "labs" ? "Computer Lab" : image.category === "classrooms" ? "Classrooms" : image.category === "library" ? "Study Center" : "Campus Events"}
                    </span>
                    <h3 className="font-display font-bold text-base text-slate-800 dark:text-slate-200 leading-snug group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                      {image.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-normal">
                      {image.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox / Popup Modal */}
        <AnimatePresence>
          {selectedImage && (
            <div 
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md"
              id="gallery-lightbox"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="relative bg-white dark:bg-slate-900 rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-white/10 dark:border-slate-800 flex flex-col md:flex-row"
                onClick={(e) => e.stopPropagation()} // Stop propagation so clicking inside doesn't close
              >
                {/* Large Image Box */}
                <div className="w-full md:w-3/5 aspect-video md:aspect-square bg-slate-900 relative">
                  <img
                    src={selectedImage.imageUrl}
                    alt={selectedImage.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Info Column */}
                <div className="w-full md:w-2/5 p-6 sm:p-8 flex flex-col justify-between bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 transition-colors duration-300">
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <span className="text-xs font-bold text-red-600 dark:text-red-400 uppercase tracking-wider bg-red-50 dark:bg-red-950/40 px-2.5 py-1 rounded-full border border-red-100 dark:border-red-900/40">
                        {selectedImage.category.toUpperCase()} SHOWCASE
                      </span>
                      {/* Close button inside modal (for mobile/desktop convenience) */}
                      <button
                        onClick={() => setSelectedImage(null)}
                        className="p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors cursor-pointer"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>

                    <h3 className="font-display font-extrabold text-xl sm:text-2xl text-slate-900 dark:text-white tracking-tight leading-tight">
                      {selectedImage.title}
                    </h3>
                    
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                      {selectedImage.description}
                    </p>

                    <div className="p-3 bg-emerald-50 dark:bg-emerald-950/20 rounded-2xl border border-emerald-100 dark:border-emerald-900/40 text-xs text-emerald-800 dark:text-emerald-400 flex items-start gap-2">
                      <Sparkles className="w-4 h-4 shrink-0 text-emerald-600 dark:text-emerald-400 mt-0.5" />
                      <span>
                        Adarsh Institute provides clean, functional environments supporting certified curriculum, equipped with proper hardware backbones.
                      </span>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex gap-3">
                    <button
                      onClick={() => setSelectedImage(null)}
                      className="flex-1 py-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-bold uppercase tracking-wider rounded-xl transition-colors cursor-pointer"
                    >
                      Close View
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
